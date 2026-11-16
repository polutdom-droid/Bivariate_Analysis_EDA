import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import type { IncomingMessage, ServerResponse } from 'node:http';
import { GoogleGenAI } from '@google/genai';

interface CachedAudioEntry {
  audioBase64: string;
  mimeType: 'audio/wav' | 'audio/mpeg';
  engine: 'gemini' | 'continuous';
}

interface TtsPayload {
  sceneId?: string;
  text?: string;
  lang?: 'km' | 'en';
}

interface TtsResult {
  status: number;
  body: Record<string, unknown>;
}

const isServerlessReadOnly =
  process.env.VERCEL === '1' ||
  Boolean(process.env.VERCEL_ENV) ||
  Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME);

const LOCAL_CACHE_DIR = path.resolve(process.cwd(), '.tts-cache');
const WRITABLE_CACHE_DIR = isServerlessReadOnly
  ? path.join(os.tmpdir(), 'tts-cache')
  : LOCAL_CACHE_DIR;

const ttsAudioCache = new Map<string, CachedAudioEntry>();
const MAX_CACHE_ENTRIES = 160;
let geminiCooldownUntil = 0;
let lastKeyFingerprint = '';

function cacheHash(cacheKey: string): string {
  return crypto.createHash('sha256').update(cacheKey).digest('hex');
}

async function readDiskCachedAudio(cacheKey: string): Promise<CachedAudioEntry | null> {
  const hash = cacheHash(cacheKey);
  const dirs = isServerlessReadOnly
    ? [WRITABLE_CACHE_DIR, LOCAL_CACHE_DIR]
    : [WRITABLE_CACHE_DIR];

  const candidates: Array<{
    ext: string;
    mimeType: 'audio/wav' | 'audio/mpeg';
    engine: 'gemini' | 'continuous';
  }> = [
    { ext: 'wav', mimeType: 'audio/wav', engine: 'gemini' },
    { ext: 'mp3', mimeType: 'audio/mpeg', engine: 'continuous' },
  ];

  for (const dir of dirs) {
    for (const c of candidates) {
      try {
        const filePath = path.join(dir, `${hash}.${c.ext}`);
        const buf = await fs.readFile(filePath);
        if (buf.length > 64) {
          return {
            audioBase64: buf.toString('base64'),
            mimeType: c.mimeType,
            engine: c.engine,
          };
        }
      } catch {
        // Check next candidate
      }
    }
  }
  return null;
}

async function writeDiskCachedAudio(
  cacheKey: string,
  entry: CachedAudioEntry
): Promise<void> {
  try {
    await fs.mkdir(WRITABLE_CACHE_DIR, { recursive: true });
    const ext = entry.mimeType === 'audio/wav' ? 'wav' : 'mp3';
    const filePath = path.join(WRITABLE_CACHE_DIR, `${cacheHash(cacheKey)}.${ext}`);
    await fs.writeFile(filePath, Buffer.from(entry.audioBase64, 'base64'));
  } catch {
    // Non-fatal if cache write is unavailable
  }
}

function setMemoryCachedAudio(cacheKey: string, entry: CachedAudioEntry): void {
  if (ttsAudioCache.size >= MAX_CACHE_ENTRIES) {
    const oldestKey = ttsAudioCache.keys().next().value;
    if (oldestKey) ttsAudioCache.delete(oldestKey);
  }
  ttsAudioCache.set(cacheKey, entry);
}

function splitSpeechChunks(text: string, lang: 'km' | 'en', maxLen = 165): string[] {
  const sentences = text
    .split(/(?<=[។.!?;:\n])\s*|\s+(?=។)/)
    .map((s) => s.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  const segmenter =
    typeof Intl !== 'undefined' && 'Segmenter' in Intl
      ? new Intl.Segmenter(lang === 'km' ? 'km' : 'en', { granularity: 'word' })
      : null;

  for (const sentence of sentences) {
    if (sentence.length <= maxLen) {
      chunks.push(sentence);
      continue;
    }

    const tokens = segmenter
      ? Array.from(segmenter.segment(sentence), (s) => s.segment)
      : sentence.split(/(?<=[,،\s\u200B])/).filter(Boolean);

    let current = '';
    for (const token of tokens) {
      if ((current + token).length > maxLen && current.trim()) {
        chunks.push(current.trim());
        current = token;
      } else {
        current += token;
      }
    }
    if (current.trim()) {
      chunks.push(current.trim());
    }
  }
  return chunks;
}

async function synthesizeContinuousSpeechMp3(
  text: string,
  lang: 'km' | 'en'
): Promise<string | null> {
  const chunks = splitSpeechChunks(text, lang, 165);
  if (chunks.length === 0) return null;

  const buffers: Buffer[] = [];
  for (const chunk of chunks) {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${lang}&q=${encodeURIComponent(
      chunk
    )}`;
    const resp = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        Referer: 'https://translate.google.com/',
      },
    });
    if (!resp.ok) {
      return null;
    }
    const arr = await resp.arrayBuffer();
    if (arr.byteLength < 64) {
      return null;
    }
    buffers.push(Buffer.from(arr));
  }

  return Buffer.concat(buffers).toString('base64');
}

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    return null;
  }
  if (apiKey !== lastKeyFingerprint) {
    lastKeyFingerprint = apiKey;
    geminiCooldownUntil = 0;
  }
  return new GoogleGenAI({
    apiKey,
    apiVersion: 'v1beta',
    httpOptions: {
      apiVersion: 'v1beta',
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

function extractGeminiError(err: unknown): { status: number; message: string; code?: string } {
  const raw = err instanceof Error ? err.message : 'Failed to generate voice narration.';
  let parsedMessage = raw;
  let parsedCode: number | undefined;

  try {
    const jsonStart = raw.indexOf('{');
    if (jsonStart !== -1) {
      const obj = JSON.parse(raw.slice(jsonStart)) as {
        error?: { code?: number; message?: string; status?: string };
      };
      if (obj?.error?.message) {
        parsedMessage = obj.error.message;
      }
      if (typeof obj?.error?.code === 'number') {
        parsedCode = obj.error.code;
      }
    }
  } catch {
    // Keep raw message if not JSON
  }

  const status =
    parsedCode && parsedCode >= 400 && parsedCode < 600
      ? parsedCode
      : parsedMessage.includes('PERMISSION_DENIED') || parsedMessage.includes('403')
      ? 403
      : parsedMessage.includes('RESOURCE_EXHAUSTED') || parsedMessage.includes('429')
      ? 429
      : parsedMessage.includes('INVALID_ARGUMENT') || parsedMessage.includes('400')
      ? 400
      : 500;

  const code =
    status === 429
      ? 'QUOTA_EXCEEDED'
      : status === 403
      ? 'PERMISSION_DENIED'
      : undefined;

  return { status, message: parsedMessage, code };
}

export async function generateTtsResponse(payload: TtsPayload): Promise<TtsResult> {
  try {
    const { sceneId, text, lang } = payload;

    if (!text || typeof text !== 'string' || !text.trim()) {
      return { status: 400, body: { error: 'Missing narration text.' } };
    }

    const targetLang: 'km' | 'en' = lang === 'en' ? 'en' : 'km';
    const cleanText = text.trim().slice(0, 1800);
    const cacheKey = `${sceneId || 'custom'}:${targetLang}:${cleanText}`;

    const cached = ttsAudioCache.get(cacheKey);
    if (cached) {
      return {
        status: 200,
        body: {
          audioBase64: cached.audioBase64,
          mimeType: cached.mimeType,
          engine: cached.engine,
          cached: true,
        },
      };
    }

    const diskCached = await readDiskCachedAudio(cacheKey);
    if (diskCached) {
      setMemoryCachedAudio(cacheKey, diskCached);
      return {
        status: 200,
        body: {
          audioBase64: diskCached.audioBase64,
          mimeType: diskCached.mimeType,
          engine: diskCached.engine,
          cached: true,
        },
      };
    }

    const ai = getGeminiClient();
    let geminiFailure: { status: number; message: string; code?: string } | null = null;

    if (ai && Date.now() >= geminiCooldownUntil) {
      try {
        const stylePrompt =
          targetLang === 'km'
            ? 'Speak naturally in clear, warm Cambodian (Khmer) language like a friendly university data science lecturer explaining a chart step-by-step at a calm, easy-to-understand pace.'
            : 'Speak naturally in clear, articulate English like an engaging university statistics instructor explaining a chart step-by-step at a steady, easy-to-follow pace.';

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash-lite-tts',
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: cleanText,
                  speechMetadata: {
                    style: stylePrompt,
                  },
                },
              ],
            },
          ],
          config: {
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: {
                  voiceName: targetLang === 'km' ? 'Kore' : 'Puck',
                },
              },
            },
          },
        });

        const base64Audio =
          response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

        if (base64Audio) {
          const entry: CachedAudioEntry = {
            audioBase64: base64Audio,
            mimeType: 'audio/wav',
            engine: 'gemini',
          };
          setMemoryCachedAudio(cacheKey, entry);
          await writeDiskCachedAudio(cacheKey, entry);
          return {
            status: 200,
            body: {
              audioBase64: base64Audio,
              mimeType: 'audio/wav',
              engine: 'gemini',
              cached: false,
            },
          };
        }
      } catch (err: unknown) {
        geminiFailure = extractGeminiError(err);
        if (geminiFailure.status === 429) {
          geminiCooldownUntil = Date.now() + 5 * 60 * 1000;
        }
      }
    }

    const continuousMp3 = await synthesizeContinuousSpeechMp3(cleanText, targetLang);
    if (continuousMp3) {
      const entry: CachedAudioEntry = {
        audioBase64: continuousMp3,
        mimeType: 'audio/mpeg',
        engine: 'continuous',
      };
      setMemoryCachedAudio(cacheKey, entry);
      await writeDiskCachedAudio(cacheKey, entry);
      return {
        status: 200,
        body: {
          audioBase64: continuousMp3,
          mimeType: 'audio/mpeg',
          engine: 'continuous',
          cached: false,
        },
      };
    }

    if (geminiFailure) {
      return {
        status: geminiFailure.status,
        body: {
          error: geminiFailure.message,
          code: geminiFailure.code,
        },
      };
    }

    return {
      status: 503,
      body: {
        error: 'Unable to synthesize voice audio right now.',
        code: 'TTS_UNAVAILABLE',
      },
    };
  } catch (err: unknown) {
    const { status, message, code } = extractGeminiError(err);
    return { status, body: { error: message, code } };
  }
}

async function readJsonBody(req: IncomingMessage & { body?: unknown }): Promise<TtsPayload> {
  if (req.body && typeof req.body === 'object') {
    return req.body as TtsPayload;
  }
  if (typeof req.body === 'string' && req.body.trim()) {
    return JSON.parse(req.body) as TtsPayload;
  }
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString('utf8').trim();
  if (!raw) return {};
  return JSON.parse(raw) as TtsPayload;
}

type VercelLikeReq = IncomingMessage & { method?: string; body?: unknown };
type VercelLikeRes = ServerResponse & {
  status?: (code: number) => VercelLikeRes;
  json?: (data: unknown) => void;
};

export default async function handler(req: VercelLikeReq, res: VercelLikeRes) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method Not Allowed. Use POST /api/tts.' }));
    return;
  }

  try {
    const payload = await readJsonBody(req);
    const result = await generateTtsResponse(payload);
    res.statusCode = result.status;
    res.end(JSON.stringify(result.body));
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Invalid JSON request body.';
    res.statusCode = 400;
    res.end(JSON.stringify({ error: message }));
  }
}
