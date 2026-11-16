import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  SkipBack,
  SkipForward,
  Film,
  Subtitles,
  Volume2,
  VolumeX,
  Gauge,
  ChevronRight,
  Loader2,
} from 'lucide-react';
import {
  VIDEO_EXPLAINER_MODULES,
  VideoExplainerModule,
  VideoExplainerScene,
  VideoSceneRendererId,
  getVideoExplainerForSlide,
} from '../utils/videoExplainers';
import { MathEquationDisplay } from './MathRenderer';

interface MiniVideoExplainerPlayerProps {
  slideNumber: number;
  langMode?: 'dual' | 'en' | 'km';
  onJumpToSlide?: (pageNumber: number) => void;
}

function clamp01(val: number): number {
  return Math.max(0, Math.min(1, val));
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * clamp01(t);
}

function easeOutCubic(t: number): number {
  const u = clamp01(t);
  return 1 - Math.pow(1 - u, 3);
}

function formatTimecode(sec: number): string {
  const s = Math.max(0, Math.floor(sec));
  const mins = Math.floor(s / 60);
  const rem = s % 60;
  return `${String(mins).padStart(2, '0')}:${String(rem).padStart(2, '0')}`;
}

function base64WavToObjectUrl(base64: string, mimeType = 'audio/wav'): string {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const blob = new Blob([bytes], { type: mimeType });
  return URL.createObjectURL(blob);
}

const SILENT_WAV_DATA_URI =
  'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';

function formatFriendlyVoiceError(rawError?: string, code?: string): string {
  const msg = (rawError || '').trim();
  if (
    code === 'QUOTA_EXCEEDED' ||
    msg.includes('Quota exceeded') ||
    msg.includes('RESOURCE_EXHAUSTED') ||
    msg.includes('429')
  ) {
    return 'កូតាសំឡេង AI ឥតគិតថ្លៃ (១០ ដង/ថ្ងៃ) ពេញហើយ — វីដេអូកំពុងចាក់ដោយភ្ជាប់អក្សររត់។ ដើម្បីប្រើសំឡេង AI បន្តបន្ទាប់ សូមជ្រើសរើស API Key ដែលមាន Billing នៅក្នុង Settings > Secrets ឬសាកល្បងម្ដងទៀតនៅថ្ងៃស្អែក។';
  }
  if (code === 'MISSING_API_KEY' || msg.includes('GEMINI_API_KEY')) {
    return 'មិនទាន់មាន GEMINI_API_KEY ទេ — សូមបញ្ចូល Key នៅក្នុង Settings > Secrets ដើម្បីបើកសំឡេង AI។';
  }
  return msg || 'មិនអាចបង្កើតសំឡេងពន្យល់បានទេនៅពេលនេះ — វីដេអូកំពុងចាក់ជាមួយអក្សររត់។';
}

export const MiniVideoExplainerPlayer: React.FC<MiniVideoExplainerPlayerProps> = ({
  slideNumber,
  langMode = 'dual',
  onJumpToSlide,
}) => {
  const defaultModule = useMemo(
    () => getVideoExplainerForSlide(slideNumber),
    [slideNumber]
  );

  const [selectedModuleId, setSelectedModuleId] = useState<VideoSceneRendererId>(
    defaultModule.id
  );
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<0.75 | 1 | 1.5>(1);
  const [showCaptions, setShowCaptions] = useState<boolean>(true);
  const [voiceEnabled, setVoiceEnabled] = useState<boolean>(true);
  const [voiceLang, setVoiceLang] = useState<'km' | 'en'>(
    langMode === 'en' ? 'en' : 'km'
  );
  const [isVoiceLoading, setIsVoiceLoading] = useState<boolean>(false);
  const [voiceError, setVoiceError] = useState<string | null>(null);
  const [showAllTopics, setShowAllTopics] = useState<boolean>(false);

  const lastFrameTimeRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUnlockedRef = useRef<boolean>(false);
  const audioCacheRef = useRef<Map<string, string>>(new Map());
  const inFlightFetchRef = useRef<Map<string, Promise<string | null>>>(new Map());
  const prefetchedKeysRef = useRef<Set<string>>(new Set());
  const activeVoiceKeyRef = useRef<string | null>(null);
  const isAudioSpeakingRef = useRef<boolean>(false);
  const isAudioLoadingRef = useRef<boolean>(false);
  const isAudioDrivenRef = useRef<boolean>(false);
  const quotaExhaustedRef = useRef<boolean>(false);

  // Keep voiceLang aligned when user switches UI to EN-only or KM-only
  useEffect(() => {
    if (langMode === 'en') setVoiceLang('en');
    if (langMode === 'km') setVoiceLang('km');
  }, [langMode]);

  const unlockAudioElement = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }
    if (!audioUnlockedRef.current && audioRef.current) {
      const el = audioRef.current;
      if (!el.src || el.src === SILENT_WAV_DATA_URI) {
        el.src = SILENT_WAV_DATA_URI;
        el.play()
          .then(() => {
            if (el.src === SILENT_WAV_DATA_URI) {
              el.pause();
              el.currentTime = 0;
            }
            audioUnlockedRef.current = true;
          })
          .catch(() => {
            // Will try again on next click gesture
          });
      }
    }
  }, []);

  const stopCurrentAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.onended = null;
      audioRef.current.onerror = null;
      audioRef.current.onloadedmetadata = null;
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    isAudioSpeakingRef.current = false;
    isAudioLoadingRef.current = false;
    isAudioDrivenRef.current = false;
    activeVoiceKeyRef.current = null;
    setIsVoiceLoading(false);
  }, []);

  // Cleanup cached object URLs on unmount
  useEffect(() => {
    const cache = audioCacheRef.current;
    return () => {
      stopCurrentAudio();
      cache.forEach((url) => URL.revokeObjectURL(url));
      cache.clear();
    };
  }, [stopCurrentAudio]);

  // Automatically switch video topic when user switches slide
  useEffect(() => {
    setSelectedModuleId(defaultModule.id);
    setCurrentTime(0);
    setIsPlaying(false);
    setVoiceError(null);
    stopCurrentAudio();
  }, [defaultModule.id, slideNumber, stopCurrentAudio]);

  const activeModule: VideoExplainerModule = useMemo(
    () =>
      VIDEO_EXPLAINER_MODULES.find((m) => m.id === selectedModuleId) ||
      defaultModule,
    [selectedModuleId, defaultModule]
  );

  const activeSceneIndex = useMemo(() => {
    const idx = activeModule.scenes.findIndex(
      (s) => currentTime >= s.startSec && currentTime < s.endSec
    );
    if (idx !== -1) return idx;
    return activeModule.scenes.length - 1;
  }, [activeModule, currentTime]);

  const activeScene = activeModule.scenes[activeSceneIndex];

  // Progress within current scene [0..1]
  const sceneProgress = useMemo(() => {
    const span = Math.max(0.1, activeScene.endSec - activeScene.startSec);
    return clamp01((currentTime - activeScene.startSec) / span);
  }, [activeScene, currentTime]);

  // Fetch + cache WAV narration audio for a given scene and language
  const fetchSceneAudioUrl = useCallback(
    async (
      scene: VideoExplainerScene,
      targetLang: 'km' | 'en',
      silentPrefetch = false
    ): Promise<string | null> => {
      const key = `${scene.id}:${targetLang}`;
      const cached = audioCacheRef.current.get(key);
      if (cached) return cached;

      const existing = inFlightFetchRef.current.get(key);
      if (existing) return existing;

      const text =
        targetLang === 'km' ? scene.spokenScript.km : scene.spokenScript.en;

      const requestPromise = (async () => {
        try {
          const resp = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sceneId: scene.id,
              text,
              lang: targetLang,
            }),
          });

          const data = (await resp.json()) as {
            audioBase64?: string;
            mimeType?: string;
            error?: string;
            code?: string;
          };

          if (!resp.ok || !data.audioBase64) {
            if (resp.status === 429 || data.code === 'QUOTA_EXCEEDED') {
              quotaExhaustedRef.current = true;
            }
            if (!silentPrefetch) {
              setVoiceError(formatFriendlyVoiceError(data.error, data.code));
            }
            return null;
          }

          quotaExhaustedRef.current = false;
          const url = base64WavToObjectUrl(
            data.audioBase64,
            data.mimeType || 'audio/wav'
          );
          audioCacheRef.current.set(key, url);
          return url;
        } catch {
          if (!silentPrefetch) {
            setVoiceError(
              formatFriendlyVoiceError('Network error while connecting to voice narration service.')
            );
          }
          return null;
        } finally {
          inFlightFetchRef.current.delete(key);
        }
      })();

      inFlightFetchRef.current.set(key, requestPromise);
      return requestPromise;
    },
    []
  );

  // Sync audio playback speed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Drive studio-grade AI voice narration & 1:1 audio-visual sync when voiceEnabled && isPlaying
  useEffect(() => {
    if (!voiceEnabled || !isPlaying) {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      }
      isAudioSpeakingRef.current = false;
      isAudioLoadingRef.current = false;
      isAudioDrivenRef.current = false;
      setIsVoiceLoading(false);
      if (!voiceEnabled) {
        activeVoiceKeyRef.current = null;
        setVoiceError(null);
      }
      return;
    }

    const desiredKey = `${activeScene.id}:${voiceLang}`;

    // If paused on the exact same scene, resume audio-driven sync smoothly
    if (
      activeVoiceKeyRef.current === desiredKey &&
      audioRef.current &&
      audioRef.current.paused &&
      audioRef.current.currentTime > 0 &&
      !audioRef.current.ended
    ) {
      audioRef.current.playbackRate = playbackSpeed;
      isAudioSpeakingRef.current = true;
      isAudioDrivenRef.current = true;
      audioRef.current.play().catch(() => {
        isAudioSpeakingRef.current = false;
        isAudioDrivenRef.current = false;
      });
      return;
    }

    if (
      activeVoiceKeyRef.current === desiredKey &&
      (isAudioSpeakingRef.current || isAudioLoadingRef.current)
    ) {
      return;
    }

    let cancelled = false;
    activeVoiceKeyRef.current = desiredKey;
    setVoiceError(null);

    const startSceneSpeech = async () => {
      if (audioRef.current) {
        audioRef.current.onended = null;
        audioRef.current.onerror = null;
        audioRef.current.pause();
      }

      const cachedAlready = audioCacheRef.current.has(desiredKey);
      if (!cachedAlready) {
        setIsVoiceLoading(true);
      }
      isAudioLoadingRef.current = !cachedAlready;
      isAudioSpeakingRef.current = true;
      isAudioDrivenRef.current = false;

      const audioUrl = await fetchSceneAudioUrl(activeScene, voiceLang, false);
      if (cancelled) return;
      isAudioLoadingRef.current = false;
      setIsVoiceLoading(false);

      if (!audioUrl) {
        // Quota hit or error: release audio lock so visual playback & captions continue cleanly
        isAudioSpeakingRef.current = false;
        isAudioDrivenRef.current = false;
        return;
      }

      if (!audioRef.current) {
        audioRef.current = new Audio();
      }

      const audioEl = audioRef.current;
      audioEl.src = audioUrl;
      audioEl.playbackRate = playbackSpeed;

      // Sync audio start offset if user jumped/scrubbed inside this scene
      const sceneSpan = Math.max(0.1, activeScene.endSec - activeScene.startSec);
      const initialFrac = clamp01((currentTime - activeScene.startSec) / sceneSpan);
      audioEl.onloadedmetadata = () => {
        if (
          !cancelled &&
          initialFrac > 0.03 &&
          initialFrac < 0.96 &&
          Number.isFinite(audioEl.duration) &&
          audioEl.duration > 0.2
        ) {
          audioEl.currentTime = initialFrac * audioEl.duration;
        }
      };

      audioEl.onended = () => {
        isAudioSpeakingRef.current = false;
        isAudioDrivenRef.current = false;
        if (activeSceneIndex < activeModule.scenes.length - 1) {
          setCurrentTime(activeModule.scenes[activeSceneIndex + 1].startSec + 0.01);
        } else {
          setIsPlaying(false);
          setCurrentTime(activeModule.durationSec);
        }
      };
      audioEl.onerror = () => {
        isAudioSpeakingRef.current = false;
        isAudioDrivenRef.current = false;
      };

      try {
        await audioEl.play();
        if (!cancelled) {
          audioUnlockedRef.current = true;
          isAudioDrivenRef.current = true;
        }
      } catch {
        isAudioSpeakingRef.current = false;
        isAudioDrivenRef.current = false;
      }
    };

    startSceneSpeech();

    return () => {
      cancelled = true;
    };
    // Intentionally omit currentTime so frame updates do not re-trigger fetch
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    voiceEnabled,
    isPlaying,
    activeScene,
    activeSceneIndex,
    activeModule.scenes,
    activeModule.durationSec,
    voiceLang,
    playbackSpeed,
    fetchSceneAudioUrl,
  ]);

  // Smooth 60fps requestAnimationFrame video loop locked 1:1 to audio progress when Voice is ON
  useEffect(() => {
    if (!isPlaying) {
      lastFrameTimeRef.current = null;
      return;
    }

    let rafId = 0;
    const tick = (now: number) => {
      if (lastFrameTimeRef.current === null) {
        lastFrameTimeRef.current = now;
      }
      const dtSec = ((now - lastFrameTimeRef.current) / 1000) * playbackSpeed;
      lastFrameTimeRef.current = now;

      const audioEl = audioRef.current;

      // 1. Wait cleanly for scene audio fetch before advancing visuals
      if (voiceEnabled && isAudioLoadingRef.current) {
        rafId = requestAnimationFrame(tick);
        return;
      }

      // 2. Audio-Master 1:1 Visual Synchronization: drive playhead & animations directly from spoken audio %
      if (
        voiceEnabled &&
        isAudioDrivenRef.current &&
        audioEl &&
        !audioEl.paused &&
        Number.isFinite(audioEl.duration) &&
        audioEl.duration > 0.2
      ) {
        const audioFrac = clamp01(audioEl.currentTime / audioEl.duration);
        const sceneSpan = Math.max(0.1, activeScene.endSec - activeScene.startSec);
        const syncedTime = Math.min(
          activeScene.endSec - 0.02,
          activeScene.startSec + audioFrac * sceneSpan
        );
        setCurrentTime(syncedTime);

        // Prefetch next scene smoothly once current audio passes 55% for gapless transitions
        if (audioFrac >= 0.55) {
          const nextScene = activeModule.scenes[activeSceneIndex + 1];
          if (nextScene) {
            const nextKey = `${nextScene.id}:${voiceLang}`;
            if (
              !audioCacheRef.current.has(nextKey) &&
              !prefetchedKeysRef.current.has(nextKey)
            ) {
              prefetchedKeysRef.current.add(nextKey);
              fetchSceneAudioUrl(nextScene, voiceLang, true);
            }
          }
        }

        rafId = requestAnimationFrame(tick);
        return;
      }

      // 3. Fallback / Muted visual timeline advancement
      setCurrentTime((prev) => {
        const next = prev + dtSec;
        const holdPoint = Math.max(0, activeScene.endSec - 0.06);

        if (voiceEnabled && isAudioSpeakingRef.current && next >= holdPoint) {
          return holdPoint;
        }

        if (next >= activeModule.durationSec) {
          setIsPlaying(false);
          return activeModule.durationSec;
        }
        return next;
      });

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [
    isPlaying,
    playbackSpeed,
    activeModule.durationSec,
    activeModule.scenes,
    activeScene.startSec,
    activeScene.endSec,
    activeSceneIndex,
    voiceEnabled,
    voiceLang,
    fetchSceneAudioUrl,
  ]);

  const handlePlayPause = () => {
    unlockAudioElement();
    if (currentTime >= activeModule.durationSec - 0.05) {
      stopCurrentAudio();
      setCurrentTime(0);
    }
    setIsPlaying((prev) => !prev);
  };

  const handleRestart = () => {
    unlockAudioElement();
    stopCurrentAudio();
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handleJumpScene = (index: number) => {
    unlockAudioElement();
    const clampedIdx = Math.max(0, Math.min(activeModule.scenes.length - 1, index));
    stopCurrentAudio();
    setCurrentTime(activeModule.scenes[clampedIdx].startSec + 0.01);
  };

  const handleCycleSpeed = () => {
    setPlaybackSpeed((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 0.75 : 1));
  };

  // Procedural 560x260 Vector Scene Renderer — spacious coordinates, ZERO overlap with subtitles/formula bar
  const renderAnimatedSceneStage = () => {
    const t = easeOutCubic(sceneProgress);
    const totalPct = clamp01(currentTime / activeModule.durationSec);

    switch (activeModule.id) {
      case 'eda_univariate_to_bivariate': {
        const pts = [
          { x: 115, y1: 196, y2: 174, c: '#38BDF8' },
          { x: 158, y1: 196, y2: 154, c: '#38BDF8' },
          { x: 202, y1: 196, y2: 136, c: '#38BDF8' },
          { x: 248, y1: 196, y2: 118, c: '#10B981' },
          { x: 294, y1: 196, y2: 100, c: '#10B981' },
          { x: 340, y1: 196, y2: 82, c: '#FACC15' },
          { x: 386, y1: 196, y2: 64, c: '#FACC15' },
          { x: 432, y1: 196, y2: 46, c: '#F43F5E' },
        ];
        const liftFactor =
          activeSceneIndex === 0 ? 0.05 * Math.sin(t * Math.PI) : activeSceneIndex === 1 ? t : 1;

        return (
          <svg viewBox="0 0 560 260" className="w-full h-full">
            <line x1="72" y1="212" x2="505" y2="212" stroke="#475569" strokeWidth="1.8" />
            <line
              x1="72"
              y1="26"
              x2="72"
              y2="212"
              stroke={activeSceneIndex === 0 ? '#1E293B' : '#38BDF8'}
              strokeWidth={activeSceneIndex === 0 ? '1' : '2'}
            />
            <text x="288" y="242" fontSize="11" fontWeight="600" fill="#94A3B8" textAnchor="middle">
              X (Quantitative Variable 1)
            </text>
            <text
              x="36"
              y="120"
              fontSize="11"
              fontWeight="600"
              fill={activeSceneIndex === 0 ? '#475569' : '#38BDF8'}
              textAnchor="middle"
              transform="rotate(-90 36 120)"
            >
              Y (Variable 2)
            </text>

            {activeSceneIndex <= 1 && (
              <>
                {pts.map((p, i) => {
                  const cy = lerp(p.y1, p.y2, liftFactor);
                  return (
                    <g key={i}>
                      <line
                        x1={p.x}
                        y1={206}
                        x2={p.x}
                        y2={cy}
                        stroke={p.c}
                        strokeOpacity="0.32"
                        strokeDasharray="3,3"
                      />
                      <circle
                        cx={p.x}
                        cy={cy}
                        r={7}
                        fill={p.c}
                        stroke="#FFFFFF"
                        strokeWidth="1.3"
                      />
                    </g>
                  );
                })}
                {activeSceneIndex === 1 && (
                  <line
                    x1="98"
                    y1="184"
                    x2={lerp(98, 452, t)}
                    y2={lerp(184, 38, t)}
                    stroke="#FACC15"
                    strokeWidth="2.5"
                    strokeDasharray="6,4"
                  />
                )}
              </>
            )}

            {activeSceneIndex === 2 && (
              <>
                <rect x="90" y="34" width="185" height="162" rx="10" fill="#0B1222" stroke="#1E293B" strokeWidth="1.5" />
                <text x="182" y="56" fontSize="11" fontWeight="bold" fill="#10B981" textAnchor="middle">
                  Linear Pattern (r = +0.92)
                </text>
                {[0, 1, 2, 3, 4, 5, 6].map((k) => (
                  <circle
                    key={k}
                    cx={116 + k * 22}
                    cy={172 - k * 15 * t}
                    r="5"
                    fill="#10B981"
                    stroke="#FFFFFF"
                    strokeWidth="0.9"
                  />
                ))}

                <rect x="300" y="34" width="185" height="162" rx="10" fill="#0B1222" stroke="#1E293B" strokeWidth="1.5" />
                <text x="392" y="56" fontSize="11" fontWeight="bold" fill="#FACC15" textAnchor="middle">
                  Circle Pattern (r = 0.00)
                </text>
                {Array.from({ length: 12 }).map((_, k) => {
                  const angle = (k / 12) * Math.PI * 2 + t * 0.6;
                  return (
                    <circle
                      key={k}
                      cx={392 + Math.cos(angle) * 44 * t}
                      cy={124 + Math.sin(angle) * 44 * t}
                      r="5"
                      fill="#FACC15"
                      stroke="#FFFFFF"
                      strokeWidth="0.9"
                    />
                  );
                })}
              </>
            )}

            {activeSceneIndex === 3 && (
              <g>
                {[
                  { x: 90, title: 'Case 1: Q × Q', sub: 'Cov, r, ρ · Scatter', color: '#38BDF8', delay: 0 },
                  { x: 235, title: 'Case 2: Q × C', sub: 'ANOVA η² · Boxplot', color: '#A855F7', delay: 0.25 },
                  { x: 380, title: 'Case 3: C × C', sub: 'χ², Ṽ · Contingency', color: '#10B981', delay: 0.5 },
                ].map((card, i) => {
                  const local = clamp01((t - card.delay) * 2);
                  return (
                    <g
                      key={i}
                      transform={`translate(0, ${lerp(22, 0, local)})`}
                      opacity={lerp(0.15, 1, local)}
                    >
                      <rect
                        x={card.x}
                        y="64"
                        width="130"
                        height="108"
                        rx="12"
                        fill="#0B1222"
                        stroke={card.color}
                        strokeWidth="2"
                      />
                      <text x={card.x + 65} y="106" fontSize="12.5" fontWeight="bold" fill={card.color} textAnchor="middle">
                        {card.title}
                      </text>
                      <text x={card.x + 65} y="134" fontSize="10" fill="#E2E8F0" textAnchor="middle">
                        {card.sub}
                      </text>
                    </g>
                  );
                })}
              </g>
            )}
          </svg>
        );
      }

      case 'boxplot_iqr_outliers': {
        const meanX = activeSceneIndex === 0 ? lerp(215, 325, t) : 325;
        const medianX = 195;
        const fenceX = activeSceneIndex >= 2 ? lerp(255, 365, activeSceneIndex === 2 ? t : 1) : 255;

        return (
          <svg viewBox="0 0 560 260" className="w-full h-full">
            <line x1="55" y1="205" x2="505" y2="205" stroke="#475569" strokeWidth="1.8" />
            <text x="68" y="230" fontSize="10" fill="#94A3B8">1M</text>
            <text x="195" y="230" fontSize="10" fill="#38BDF8" textAnchor="middle">10.5M (Median)</text>
            <text x="325" y="230" fontSize="10" fill="#F43F5E" textAnchor="middle">44.0M (Mean)</text>
            <text x="478" y="230" fontSize="10" fill="#FACC15" textAnchor="middle">1.32B</text>

            {activeSceneIndex === 3 && (
              <path
                d={`M 95 122 C 128 ${122 - 54 * t}, 162 ${122 - 62 * t}, 200 ${122 - 18 * t} C 238 ${122 - 58 * t}, 280 ${122 - 46 * t}, 332 122 C 280 ${122 + 46 * t}, 238 ${122 + 58 * t}, 200 ${122 + 18 * t} C 162 ${122 + 62 * t}, 128 ${122 + 54 * t}, 95 122 Z`}
                fill="#F43F5E"
                fillOpacity="0.28"
                stroke="#FB7185"
                strokeWidth="2"
              />
            )}

            <g opacity={activeSceneIndex >= 1 ? 1 : 0.35}>
              <line x1="105" y1="122" x2={fenceX} y2="122" stroke="#818CF8" strokeWidth="2.5" />
              <line x1="105" y1="100" x2="105" y2="144" stroke="#818CF8" strokeWidth="2.5" />
              <line x1={fenceX} y1="100" x2={fenceX} y2="144" stroke="#10B981" strokeWidth="2.5" />
              <rect
                x="146"
                y="88"
                width={activeSceneIndex === 1 ? lerp(12, 108, t) : 108}
                height="68"
                rx="6"
                fill="#4F46E5"
                fillOpacity="0.45"
                stroke="#38BDF8"
                strokeWidth="2"
              />
              <line x1={medianX} y1="82" x2={medianX} y2="162" stroke="#38BDF8" strokeWidth="3.5" />
            </g>

            <line x1={meanX} y1="44" x2={meanX} y2="205" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4,3" />
            <text x={meanX} y="32" fontSize="10.5" fontWeight="bold" fill="#FB7185" textAnchor="middle">
              Mean x̄
            </text>

            {activeSceneIndex >= 2 && (
              <>
                <line x1="365" y1="62" x2="365" y2="205" stroke="#FACC15" strokeWidth="1.6" strokeDasharray="3,3" />
                <text x="372" y="56" fontSize="10" fontWeight="bold" fill="#FACC15" textAnchor="start">
                  Fence: Q₃ + 1.5×IQR
                </text>
              </>
            )}

            <circle
              cx={lerp(262, 435, activeSceneIndex === 0 ? t : 1)}
              cy="122"
              r={activeSceneIndex === 2 ? 7 + Math.sin(t * Math.PI * 3) * 2 : 7}
              fill="#FACC15"
              stroke="#FFFFFF"
              strokeWidth="1.5"
            />
            <circle
              cx={lerp(275, 480, activeSceneIndex === 0 ? t : 1)}
              cy="122"
              r={activeSceneIndex === 2 ? 8.5 + Math.sin(t * Math.PI * 3) * 2 : 8}
              fill="#F43F5E"
              stroke="#FACC15"
              strokeWidth="2"
            />
            <text x="435" y="102" fontSize="10" fontWeight="bold" fill="#FACC15" textAnchor="middle">India</text>
            <text x="480" y="102" fontSize="10" fontWeight="bold" fill="#FB7185" textAnchor="middle">China</text>
          </svg>
        );
      }

      case 'covariance_quadrants': {
        const cx = 280;
        const cy = 118;
        const crossAlpha = activeSceneIndex === 0 ? t : 1;
        const pts = [
          { x: 375, y: 58, q: '+' },
          { x: 420, y: 44, q: '+' },
          { x: 340, y: 78, q: '+' },
          { x: 180, y: 165, q: '+' },
          { x: 140, y: 180, q: '+' },
          { x: 205, y: 148, q: '+' },
          { x: 190, y: 68, q: '-' },
          { x: 375, y: 168, q: '-' },
        ];

        return (
          <svg viewBox="0 0 560 260" className="w-full h-full">
            {activeSceneIndex >= 1 && (
              <g opacity={activeSceneIndex === 1 ? t * 0.25 : 0.16}>
                <rect x={cx} y="24" width="210" height={cy - 24} fill="#10B981" />
                <rect x="70" y={cy} width={cx - 70} height="76" fill="#10B981" />
              </g>
            )}

            {activeSceneIndex >= 2 && (
              <g opacity={activeSceneIndex === 2 ? t * 0.24 : 0.14}>
                <rect x="70" y="24" width={cx - 70} height={cy - 24} fill="#F43F5E" />
                <rect x={cx} y={cy} width="210" height="76" fill="#F43F5E" />
              </g>
            )}

            <line
              x1={cx}
              y1={lerp(cy, 24, crossAlpha)}
              x2={cx}
              y2={lerp(cy, 198, crossAlpha)}
              stroke="#38BDF8"
              strokeWidth="2"
              strokeDasharray="5,4"
            />
            <line
              x1={lerp(cx, 70, crossAlpha)}
              y1={cy}
              x2={lerp(cx, 490, crossAlpha)}
              y2={cy}
              stroke="#38BDF8"
              strokeWidth="2"
              strokeDasharray="5,4"
            />
            <circle cx={cx} cy={cy} r="5.5" fill="#FACC15" />
            <text x={cx + 10} y={cy - 8} fontSize="10.5" fontWeight="bold" fill="#FACC15">
              (x̄, ȳ)
            </text>

            <text x="480" y="38" fontSize="10" fontWeight="bold" fill="#10B981" textAnchor="end">(+, +) → Cov &gt; 0</text>
            <text x="80" y="186" fontSize="10" fontWeight="bold" fill="#10B981" textAnchor="start">(−, −) → Cov &gt; 0</text>
            <text x="80" y="38" fontSize="10" fontWeight="bold" fill="#FB7185" textAnchor="start">(−, +) → Cov &lt; 0</text>
            <text x="480" y="186" fontSize="10" fontWeight="bold" fill="#FB7185" textAnchor="end">(+, −) → Cov &lt; 0</text>

            {pts.map((p, i) => {
              const showRect =
                (p.q === '+' && activeSceneIndex === 1) ||
                (p.q === '-' && activeSceneIndex === 2);
              return (
                <g key={i}>
                  {showRect && (
                    <rect
                      x={Math.min(cx, p.x)}
                      y={Math.min(cy, p.y)}
                      width={Math.abs(p.x - cx) * t}
                      height={Math.abs(p.y - cy) * t}
                      fill={p.q === '+' ? '#10B981' : '#F43F5E'}
                      fillOpacity="0.22"
                      stroke={p.q === '+' ? '#10B981' : '#F43F5E'}
                      strokeWidth="1"
                    />
                  )}
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="5.5"
                    fill={p.q === '+' ? '#10B981' : '#F43F5E'}
                    stroke="#FFFFFF"
                    strokeWidth="1"
                  />
                </g>
              );
            })}

            {activeSceneIndex === 3 && (
              <g>
                <rect x="125" y="210" width="310" height="16" rx="8" fill="#0B1222" stroke="#334155" />
                <rect x="280" y="212" width={125 * t} height="12" rx="6" fill="#38BDF8" />
                <text x="280" y="246" fontSize="10.5" fontWeight="bold" fill="#FACC15" textAnchor="middle">
                  r = Cov / (sₓ·sᵧ) = +{(0.79 * t).toFixed(2)} (Unitless [-1, +1])
                </text>
              </g>
            )}
          </svg>
        );
      }

      case 'pearson_vs_spearman_outlier': {
        const rawPts = [
          { x: 105, y: 196 },
          { x: 180, y: 186 },
          { x: 255, y: 168 },
          { x: 330, y: 128 },
          { x: 405, y: 54 },
        ];
        const rankPts = [
          { x: 105, y: 196 },
          { x: 180, y: 160 },
          { x: 255, y: 125 },
          { x: 330, y: 90 },
          { x: 405, y: 54 },
        ];

        const morph = activeSceneIndex === 1 ? t : activeSceneIndex === 3 ? 1 : 0;
        const outlierJumpY = activeSceneIndex === 2 ? lerp(185, 52, t) : 185;
        const rDisplay =
          activeSceneIndex === 0
            ? 'Pearson r = 0.85 | Spearman ρ = 1.00'
            : activeSceneIndex === 1
            ? 'Morphing to Ranks → Pearson(Rank) = ρ = 1.00!'
            : activeSceneIndex === 2
            ? `Outlier Y₄ skyrockets → Pearson r hijacked to +${lerp(0.1, 0.98, t).toFixed(2)}!`
            : 'Rank #5 unchanged → Spearman ρ stays 1.00!';

        return (
          <svg viewBox="0 0 560 260" className="w-full h-full">
            <line x1="72" y1="212" x2="495" y2="212" stroke="#475569" strokeWidth="1.8" />
            <line x1="72" y1="42" x2="72" y2="212" stroke="#475569" strokeWidth="1.8" />

            <rect x="95" y="10" width="370" height="24" rx="6" fill="#0B1222" stroke="#1E293B" />
            <text x="280" y="26" fontSize="10.5" fontWeight="bold" fill="#FACC15" textAnchor="middle">
              {rDisplay}
            </text>

            {activeSceneIndex <= 1 && (
              <>
                <path
                  d="M 105 196 Q 285 182 405 54"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="2.2"
                  strokeOpacity={1 - morph * 0.7}
                />
                <line
                  x1="105"
                  y1="196"
                  x2="405"
                  y2="54"
                  stroke="#10B981"
                  strokeWidth="2.5"
                  strokeDasharray={morph < 0.2 ? '5,4' : undefined}
                />
                {rawPts.map((rp, i) => {
                  const target = rankPts[i];
                  return (
                    <g key={i}>
                      <circle
                        cx={rp.x}
                        cy={lerp(rp.y, target.y, morph)}
                        r="6.5"
                        fill={morph > 0.5 ? '#10B981' : '#38BDF8'}
                        stroke="#FFFFFF"
                        strokeWidth="1.3"
                      />
                      {morph > 0.5 && (
                        <text
                          x={rp.x + 12}
                          y={lerp(rp.y, target.y, morph) + 4}
                          fontSize="9.5"
                          fontWeight="bold"
                          fill="#E2E8F0"
                        >
                          Rank #{i + 1}
                        </text>
                      )}
                    </g>
                  );
                })}
              </>
            )}

            {activeSceneIndex >= 2 && (
              <>
                {[
                  { x: 115, y: 196 },
                  { x: 180, y: 165 },
                  { x: 245, y: 180 },
                  { x: 310, y: 146 },
                ].map((pt, i) => (
                  <circle
                    key={i}
                    cx={pt.x}
                    cy={activeSceneIndex === 3 ? 196 - i * 32 : pt.y}
                    r="6"
                    fill="#38BDF8"
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                  />
                ))}
                <circle
                  cx="390"
                  cy={activeSceneIndex === 3 ? 64 : outlierJumpY}
                  r="8"
                  fill={activeSceneIndex === 3 ? '#10B981' : '#F43F5E'}
                  stroke="#FACC15"
                  strokeWidth="2"
                />
                <text
                  x="408"
                  y={(activeSceneIndex === 3 ? 64 : outlierJumpY) + 4}
                  fontSize="10"
                  fontWeight="bold"
                  fill={activeSceneIndex === 3 ? '#10B981' : '#FB7185'}
                >
                  {activeSceneIndex === 3 ? 'Still Rank #5 (ρ = 1.0!)' : 'Outlier Y₄ ↑ 1000!'}
                </text>
              </>
            )}
          </svg>
        );
      }

      case 'log_scale_and_anscombe': {
        const logMorph = activeSceneIndex === 0 ? 0 : activeSceneIndex === 1 ? t : 1;
        const sampleCountries = [
          { linX: 84, logX: 122, y: 186 },
          { linX: 94, logX: 168, y: 164 },
          { linX: 115, logX: 222, y: 136 },
          { linX: 155, logX: 285, y: 110 },
          { linX: 230, logX: 348, y: 84 },
          { linX: 365, logX: 410, y: 62 },
          { linX: 460, logX: 460, y: 48 },
        ];

        return (
          <svg viewBox="0 0 560 260" className="w-full h-full">
            {activeSceneIndex <= 1 ? (
              <>
                <line x1="72" y1="212" x2="500" y2="212" stroke="#475569" strokeWidth="1.8" />
                <line x1="72" y1="34" x2="72" y2="212" stroke="#475569" strokeWidth="1.8" />
                <text x="285" y="22" fontSize="11" fontWeight="bold" fill="#FACC15" textAnchor="middle">
                  {logMorph > 0.5
                    ? 'Log₁₀(GDP) Scale → Straight Linear Trend (r = 0.809)'
                    : 'Linear GDP Scale → Curved & Squashed on Left (r = 0.679)'}
                </text>
                {sampleCountries.map((c, i) => (
                  <circle
                    key={i}
                    cx={lerp(c.linX, c.logX, logMorph)}
                    cy={c.y}
                    r="6.5"
                    fill={logMorph > 0.5 ? '#10B981' : '#38BDF8'}
                    stroke="#FFFFFF"
                    strokeWidth="1.2"
                  />
                ))}
                {logMorph > 0.45 && (
                  <line
                    x1="112"
                    y1="190"
                    x2="470"
                    y2="44"
                    stroke="#FACC15"
                    strokeWidth="2.4"
                    strokeDasharray="6,4"
                    opacity={logMorph}
                  />
                )}
              </>
            ) : (
              <g>
                <text x="280" y="24" fontSize="11" fontWeight="bold" fill="#FACC15" textAnchor="middle">
                  Anscombe’s Quartet: ALL 4 have r = 0.816 &amp; Mean = 9.0!
                </text>
                {[
                  { x: 54, y: 42, label: 'I. Linear', pts: [[16, 68], [38, 52], [60, 38], [82, 22]] },
                  { x: 172, y: 42, label: 'II. Curve', pts: [[16, 64], [38, 34], [60, 26], [82, 42]] },
                  { x: 290, y: 42, label: 'III. Outlier', pts: [[16, 66], [38, 58], [60, 50], [82, 14]] },
                  { x: 408, y: 42, label: 'IV. Vertical', pts: [[30, 64], [30, 50], [30, 36], [82, 16]] },
                ].map((panel, pIdx) => (
                  <g key={pIdx}>
                    <rect
                      x={panel.x}
                      y={panel.y}
                      width="102"
                      height="155"
                      rx="8"
                      fill="#0B1222"
                      stroke={activeSceneIndex === 3 ? '#10B981' : '#38BDF8'}
                      strokeWidth="1.5"
                    />
                    <text x={panel.x + 51} y={panel.y + 20} fontSize="10" fontWeight="bold" fill="#E2E8F0" textAnchor="middle">
                      {panel.label}
                    </text>
                    <line
                      x1={panel.x + 12}
                      y1={panel.y + 128}
                      x2={panel.x + 90}
                      y2={panel.y + 56}
                      stroke="#FACC15"
                      strokeWidth="1.6"
                    />
                    {panel.pts.map(([px, py], i) => {
                      const dotT = activeSceneIndex === 2 ? t : 1;
                      return (
                        <circle
                          key={i}
                          cx={panel.x + px}
                          cy={panel.y + 44 + py * dotT}
                          r="4.5"
                          fill={pIdx >= 2 && i === 3 ? '#F43F5E' : '#38BDF8'}
                        />
                      );
                    })}
                  </g>
                ))}
              </g>
            )}
          </svg>
        );
      }

      case 'anova_variance_decomposition': {
        const groups = [
          { name: 'Africa', x: 125, meanY: 172, color: '#6366F1', dots: [154, 178, 190] },
          { name: 'Asia', x: 225, meanY: 108, color: '#F43F5E', dots: [88, 108, 128] },
          { name: 'Americas', x: 325, meanY: 92, color: '#10B981', dots: [78, 92, 106] },
          { name: 'Europe', x: 425, meanY: 64, color: '#A855F7', dots: [52, 64, 76] },
        ];
        const grandY = 122;

        return (
          <svg viewBox="0 0 560 260" className="w-full h-full">
            <line x1="70" y1="212" x2="495" y2="212" stroke="#475569" strokeWidth="1.8" />
            <line x1="70" y1={grandY} x2="495" y2={grandY} stroke="#FACC15" strokeWidth="2" strokeDasharray="5,4" />
            <text x="490" y={grandY - 8} fontSize="10" fontWeight="bold" fill="#FACC15" textAnchor="end">
              Global Mean ȳ = 67.0y
            </text>

            {groups.map((g, gi) => (
              <g key={gi}>
                <text x={g.x} y="232" fontSize="10.5" fontWeight="bold" fill={g.color} textAnchor="middle">
                  {g.name}
                </text>

                {activeSceneIndex >= 1 && (
                  <>
                    <line
                      x1={g.x - 24}
                      y1={g.meanY}
                      x2={g.x + 24}
                      y2={g.meanY}
                      stroke={g.color}
                      strokeWidth="3"
                    />
                    {activeSceneIndex === 1 && (
                      <line
                        x1={g.x - 30}
                        y1={grandY}
                        x2={g.x - 30}
                        y2={lerp(grandY, g.meanY, t)}
                        stroke="#FACC15"
                        strokeWidth="3"
                      />
                    )}
                  </>
                )}

                {g.dots.map((dy, di) => (
                  <g key={di}>
                    {activeSceneIndex === 0 && (
                      <line
                        x1={g.x + (di - 1) * 14}
                        y1={grandY}
                        x2={g.x + (di - 1) * 14}
                        y2={lerp(grandY, dy, t)}
                        stroke="#38BDF8"
                        strokeWidth="1.8"
                      />
                    )}
                    {activeSceneIndex === 2 && (
                      <line
                        x1={g.x + (di - 1) * 14}
                        y1={g.meanY}
                        x2={g.x + (di - 1) * 14}
                        y2={lerp(g.meanY, dy, t)}
                        stroke="#38BDF8"
                        strokeWidth="2.2"
                      />
                    )}
                    <circle
                      cx={g.x + (di - 1) * 14}
                      cy={dy}
                      r="5.5"
                      fill={g.color}
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    />
                  </g>
                ))}
              </g>
            ))}

            {activeSceneIndex === 3 && (
              <g>
                <rect x="105" y="14" width="350" height="26" rx="8" fill="#0B1222" stroke="#10B981" strokeWidth="1.5" />
                <rect x="109" y="18" width={342 * 0.635 * t} height="18" rx="5" fill="#10B981" />
                <text x="280" y="31" fontSize="10.5" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                  η² = BSS / TSS = {(0.635 * t).toFixed(3)} ({(63.5 * t).toFixed(1)}% Explained!)
                </text>
              </g>
            )}
          </svg>
        );
      }

      case 'contingency_chi_square': {
        const rows = [
          { name: 'Europe', cells: [{ o: 28, e: 12.1 }, { o: 2, e: 17.9 }] },
          { name: 'Africa', cells: [{ o: 2, e: 17.9 }, { o: 50, e: 34.1 }] },
        ];
        return (
          <svg viewBox="0 0 560 260" className="w-full h-full">
            <text x="280" y="24" fontSize="11" fontWeight="bold" fill="#38BDF8" textAnchor="middle">
              {activeSceneIndex === 0
                ? 'Step 1: Observed Frequencies (Oᵢⱼ)'
                : activeSceneIndex === 1
                ? 'Step 2: Expected Under Independence Eᵢⱼ = (Row×Col)/n'
                : activeSceneIndex === 2
                ? 'Step 3: Discrepancy (Oᵢⱼ − Eᵢⱼ)² / Eᵢⱼ → χ² = 94.3!'
                : 'Step 4: Normalized Cramér’s Ṽ = 0.69 (Strong Association)'}
            </text>

            <text x="255" y="52" fontSize="10.5" fontWeight="bold" fill="#10B981" textAnchor="middle">High GDP</text>
            <text x="415" y="52" fontSize="10.5" fontWeight="bold" fill="#F43F5E" textAnchor="middle">Low/Mid GDP</text>

            {rows.map((r, ri) => (
              <g key={ri}>
                <text x="100" y={102 + ri * 76} fontSize="11.5" fontWeight="bold" fill="#FACC15" textAnchor="middle">
                  {r.name}
                </text>
                {r.cells.map((cell, ci) => {
                  const bx = 180 + ci * 160;
                  const by = 64 + ri * 76;
                  const mismatch = Math.abs(cell.o - cell.e) > 10;
                  return (
                    <g key={ci}>
                      <rect
                        x={bx}
                        y={by}
                        width="148"
                        height="64"
                        rx="10"
                        fill={
                          activeSceneIndex >= 2 && mismatch
                            ? 'rgba(244, 63, 94, 0.2)'
                            : '#0B1222'
                        }
                        stroke={
                          activeSceneIndex >= 2 && mismatch
                            ? '#FACC15'
                            : '#1E293B'
                        }
                        strokeWidth={activeSceneIndex >= 2 && mismatch ? '2' : '1.4'}
                      />
                      <text x={bx + 74} y={by + 27} fontSize="13.5" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                        O = {cell.o}
                      </text>
                      {activeSceneIndex >= 1 && (
                        <text
                          x={bx + 74}
                          y={by + 48}
                          fontSize="11"
                          fontWeight="bold"
                          fill="#38BDF8"
                          textAnchor="middle"
                          opacity={activeSceneIndex === 1 ? t : 1}
                        >
                          E = {cell.e.toFixed(1)}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>
            ))}

            {activeSceneIndex === 3 && (
              <g>
                <rect x="125" y="220" width="310" height="22" rx="8" fill="#0B1222" stroke="#10B981" />
                <rect x="129" y="224" width={302 * 0.69 * t} height="14" rx="5" fill="#10B981" />
                <text x="280" y="235" fontSize="10" fontWeight="bold" fill="#FFFFFF" textAnchor="middle">
                  Cramér’s Ṽ = {(0.69 * t).toFixed(2)} ∈ [0, 1]
                </text>
              </g>
            )}
          </svg>
        );
      }

      case 'mosaic_treemap_and_spaghetti': {
        return (
          <svg viewBox="0 0 560 260" className="w-full h-full">
            {activeSceneIndex === 0 && (
              <g>
                <text x="280" y="24" fontSize="11" fontWeight="bold" fill="#38BDF8" textAnchor="middle">
                  100% Normalized Stacked Bars Compare Composition Fairly
                </text>
                {[
                  { label: 'Europe', x: 125, hi: 138 * t, mid: 24 * t },
                  { label: 'Americas', x: 245, hi: 64 * t, mid: 76 * t },
                  { label: 'Asia', x: 365, hi: 56 * t, mid: 74 * t },
                ].map((bar, bi) => (
                  <g key={bi}>
                    <rect x={bar.x} y={208 - bar.hi} width="76" height={bar.hi} fill="#10B981" rx="3" />
                    <rect x={bar.x} y={208 - bar.hi - bar.mid} width="76" height={bar.mid} fill="#38BDF8" rx="3" />
                    <rect x={bar.x} y={48} width="76" height={Math.max(0, 160 - bar.hi - bar.mid)} fill="#6366F1" rx="3" />
                    <text x={bar.x + 38} y="230" fontSize="10.5" fill="#E2E8F0" textAnchor="middle">
                      {bar.label}
                    </text>
                  </g>
                ))}
              </g>
            )}

            {activeSceneIndex >= 1 && activeSceneIndex <= 2 && (
              <g>
                <line x1="70" y1="210" x2="495" y2="210" stroke="#475569" strokeWidth="1.8" />
                <line x1="70" y1="36" x2="70" y2="210" stroke="#475569" strokeWidth="1.8" />
                <text x="280" y="22" fontSize="11" fontWeight="bold" fill={activeSceneIndex === 2 ? '#10B981' : '#FB7185'} textAnchor="middle">
                  {activeSceneIndex === 1
                    ? 'Spaghetti Plot: 142 Tangled Lines = Unreadable!'
                    : 'Focus + Context: Gray Background (15%) + Highlighted Cambodia/Australia'}
                </text>
                {Array.from({ length: 14 }).map((_, k) => {
                  const yStart = 62 + ((k * 37) % 126);
                  const yMid = 52 + ((k * 53) % 136);
                  const yEnd = 48 + ((k * 29) % 140);
                  const fade = activeSceneIndex === 2 ? lerp(0.85, 0.16, t) : 0.85;
                  return (
                    <path
                      key={k}
                      d={`M 80 ${yStart} Q 275 ${yMid}, 480 ${yEnd}`}
                      fill="none"
                      stroke={activeSceneIndex === 2 ? '#64748B' : `hsl(${k * 26}, 80%, 60%)`}
                      strokeWidth="1.6"
                      strokeOpacity={fade}
                    />
                  );
                })}
                {activeSceneIndex === 2 && (
                  <>
                    <path
                      d="M 80 170 Q 275 122, 475 74"
                      fill="none"
                      stroke="#FACC15"
                      strokeWidth="3.5"
                    />
                    <text x="480" y="70" fontSize="10.5" fontWeight="bold" fill="#FACC15" textAnchor="end">Cambodia</text>
                    <path
                      d="M 80 78 Q 275 60, 475 44"
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="3.5"
                    />
                    <text x="480" y="38" fontSize="10.5" fontWeight="bold" fill="#38BDF8" textAnchor="end">Australia</text>
                  </>
                )}
              </g>
            )}

            {activeSceneIndex === 3 && (
              <g>
                <text x="280" y="24" fontSize="11" fontWeight="bold" fill="#38BDF8" textAnchor="middle">
                  Small Multiples (Faceting by Continent Eliminates Overlap)
                </text>
                {['Asia', 'Europe', 'Africa', 'Americas'].map((name, idx) => {
                  const fx = 62 + idx * 112;
                  return (
                    <g key={name} opacity={t}>
                      <rect x={fx} y="46" width="98" height="156" rx="8" fill="#0B1222" stroke="#1E293B" />
                      <text x={fx + 49} y="66" fontSize="10.5" fontWeight="bold" fill="#FACC15" textAnchor="middle">
                        {name}
                      </text>
                      <path
                        d={`M ${fx + 14} ${172 - idx * 15} Q ${fx + 49} ${142 - idx * 12}, ${fx + 84} ${102 - idx * 10}`}
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="2.5"
                      />
                    </g>
                  );
                })}
              </g>
            )}
          </svg>
        );
      }

      case 'curse_of_dimensionality': {
        return (
          <svg viewBox="0 0 560 260" className="w-full h-full">
            {activeSceneIndex === 0 && (
              <g>
                <line x1="72" y1="210" x2="485" y2="210" stroke="#475569" strokeWidth="1.8" />
                <line x1="72" y1="38" x2="72" y2="210" stroke="#475569" strokeWidth="1.8" />
                <path d="M 72 210 Q 275 202, 475 46" fill="none" stroke="#38BDF8" strokeWidth="3" />
                <circle cx={lerp(88, 465, t)} cy={210 - Math.pow(t, 2) * 164} r="8" fill="#FACC15" stroke="#FFF" strokeWidth="1.5" />
                <text x="280" y="24" fontSize="11" fontWeight="bold" fill="#FACC15" textAnchor="middle">
                  p = {Math.round(lerp(4, 100, t))} Variables → {Math.round((lerp(4, 100, t) * (lerp(4, 100, t) - 1)) / 2)} Bivariate Charts!
                </text>
              </g>
            )}

            {activeSceneIndex === 1 && (
              <g>
                <text x="280" y="24" fontSize="11" fontWeight="bold" fill="#38BDF8" textAnchor="middle">
                  Volume Sparsity: 1D (10 bins) → 2D (100 cells) → 3D (1,000 cubes)
                </text>
                <line x1="68" y1="126" x2="152" y2="126" stroke="#38BDF8" strokeWidth="3" />
                {[0, 1, 2, 3, 4].map((i) => <circle key={i} cx={78 + i * 17} cy="126" r="4.5" fill="#10B981" />)}
                <text x="110" y="212" fontSize="10.5" fill="#E2E8F0" textAnchor="middle">1D: Dense</text>

                <rect x="210" y="68" width="116" height="116" fill="#0B1222" stroke="#38BDF8" />
                {[0, 1, 2, 3, 4].map((i) => <circle key={i} cx={225 + i * 21} cy={84 + ((i * 29) % 80)} r="4.5" fill="#FACC15" />)}
                <text x="268" y="212" fontSize="10.5" fill="#E2E8F0" textAnchor="middle">2D: Sparser</text>

                <g opacity={t}>
                  <rect x="380" y="80" width="94" height="94" fill="none" stroke="#F43F5E" strokeWidth="1.5" />
                  <rect x="404" y="58" width="94" height="94" fill="none" stroke="#F43F5E" strokeWidth="1.5" />
                  <line x1="380" y1="80" x2="404" y2="58" stroke="#F43F5E" />
                  <line x1="474" y1="80" x2="498" y2="58" stroke="#F43F5E" />
                  <circle cx="418" cy="126" r="4" fill="#F43F5E" />
                  <circle cx="466" cy="90" r="4" fill="#F43F5E" />
                  <text x="438" y="212" fontSize="10.5" fill="#FB7185" textAnchor="middle">3D+: Empty Void</text>
                </g>
              </g>
            )}

            {activeSceneIndex >= 2 && (
              <g>
                <text x="280" y="24" fontSize="11" fontWeight="bold" fill="#10B981" textAnchor="middle">
                  {activeSceneIndex === 2
                    ? 'High Dimensions: d_min ≈ d_max (Points Appear Equidistant)'
                    : 'Golden Filter: Highlight |r| > 0.70 Cells on Matrix First'}
                </text>
                {[0, 1, 2, 3].map((r) =>
                  [0, 1, 2, 3].map((c) => {
                    const isHot = (r === 1 && c === 3) || (r === 3 && c === 1) || r === c;
                    return (
                      <rect
                        key={`${r}-${c}`}
                        x={180 + c * 50}
                        y={52 + r * 44}
                        width="42"
                        height="38"
                        rx="6"
                        fill={
                          activeSceneIndex === 3 && isHot
                            ? '#10B981'
                            : r === c
                            ? '#38BDF8'
                            : '#111C30'
                        }
                        fillOpacity={activeSceneIndex === 3 && isHot ? 0.3 + 0.6 * t : 0.7}
                        stroke={activeSceneIndex === 3 && isHot ? '#FACC15' : '#1E293B'}
                        strokeWidth={activeSceneIndex === 3 && isHot ? '2' : '1'}
                      />
                    );
                  })
                )}
              </g>
            )}
          </svg>
        );
      }

      case 'pca_and_multivariate_synthesis':
      default: {
        const angleRad =
          activeSceneIndex === 0
            ? 0
            : activeSceneIndex === 1
            ? lerp(0, -0.62, t)
            : -0.62;
        const cosA = Math.cos(angleRad);
        const sinA = Math.sin(angleRad);
        const pc1X1 = 280 - cosA * 160;
        const pc1Y1 = 122 - sinA * 160;
        const pc1X2 = 280 + cosA * 160;
        const pc1Y2 = 122 + sinA * 160;

        return (
          <svg viewBox="0 0 560 260" className="w-full h-full">
            <line x1="72" y1="208" x2="490" y2="208" stroke="#475569" strokeWidth="1.8" />
            <line x1="72" y1="32" x2="72" y2="208" stroke="#475569" strokeWidth="1.8" />

            {[-115, -80, -45, -15, 18, 50, 84, 118].map((d, i) => {
              const px = 280 + d * Math.cos(-0.62) + ((i % 2 === 0 ? 1 : -1) * 18);
              const py = 122 + d * Math.sin(-0.62) + ((i % 3 === 0 ? -1 : 1) * 14);
              return (
                <circle
                  key={i}
                  cx={px}
                  cy={py}
                  r={activeSceneIndex === 0 ? 5 + (i % 4) * 3.5 : 6}
                  fill={
                    activeSceneIndex === 0
                      ? ['#38BDF8', '#10B981', '#FACC15', '#F43F5E'][i % 4]
                      : '#38BDF8'
                  }
                  fillOpacity="0.82"
                  stroke="#FFFFFF"
                  strokeWidth="1"
                />
              );
            })}

            {activeSceneIndex >= 1 && (
              <>
                <line x1={pc1X1} y1={pc1Y1} x2={pc1X2} y2={pc1Y2} stroke="#FACC15" strokeWidth="3" />
                <text x={pc1X2} y={pc1Y2 - 12} fontSize="11" fontWeight="bold" fill="#FACC15" textAnchor="end">
                  PC₁ (Max Variance)
                </text>
              </>
            )}

            {activeSceneIndex >= 2 && (
              <>
                {(() => {
                  const pc2Scale = activeSceneIndex === 2 ? t : 1;
                  return (
                    <line
                      x1={280 - sinA * 76 * pc2Scale}
                      y1={122 + cosA * 76 * pc2Scale}
                      x2={280 + sinA * 76 * pc2Scale}
                      y2={122 - cosA * 76 * pc2Scale}
                      stroke="#10B981"
                      strokeWidth="2.5"
                      strokeDasharray="4,3"
                    />
                  );
                })()}
                <text x="195" y="42" fontSize="10.5" fontWeight="bold" fill="#10B981">
                  PC₂ ⊥ PC₁ (90°)
                </text>
              </>
            )}

            <text x="280" y="240" fontSize="10.5" fontWeight="bold" fill="#38BDF8" textAnchor="middle">
              {activeSceneIndex === 0
                ? '5D Channels: X, Y, Size, Color & Time'
                : `Captured Variance on PC₁ Axis: ${Math.round(lerp(52, 91, totalPct))}%`}
            </text>
          </svg>
        );
      }
    }
  };

  return (
    <section
      id="mini-video-explainer"
      className="rounded-2xl bg-[#0A101F] border border-[#1E293B] p-5 sm:p-6 space-y-5 shadow-xl"
    >
      {/* Top Section Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#1E293B] pb-4">
        <div className="space-y-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
            <Film className="w-4 h-4 text-[#FACC15] shrink-0" />
            <span>
              Interactive Mini-Video Explainer · វីដេអូគំនូរជីវចលខ្លីពន្យល់មេរៀន
            </span>
          </div>
          <div className="text-xs text-slate-400">
            <span>{activeModule.slideRangeLabel}</span>
            <span className="mx-2 text-slate-600">·</span>
            <span>{activeModule.badgeLabel}</span>
            <span className="mx-2 text-slate-600">·</span>
            <span className="khmer-text text-slate-300">
              ចុច Play ដើម្បីទស្សនាចលនាពន្យល់មួយជំហានម្តងៗ
            </span>
          </div>
        </div>

        <button
          onClick={() => setShowAllTopics((prev) => !prev)}
          className="px-3.5 py-2 rounded-lg bg-[#111C30] hover:bg-[#1E293B] border border-[#263552] text-xs font-semibold text-[#38BDF8] transition-colors cursor-pointer whitespace-nowrap shrink-0 khmer-text"
        >
          {showAllTopics
            ? 'បិទបញ្ជីវីដេអូទាំង ១០ (Hide Topics)'
            : 'ជ្រើសរើសវីដេអូមេរៀនទាំង ១០ (Browse 10 Videos)'}
        </button>
      </div>

      {/* Topic Library Drawer (All 10 Mini-Videos across 41 Slides) */}
      {showAllTopics && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 p-3.5 rounded-xl bg-[#060A14] border border-[#1E293B]">
          {VIDEO_EXPLAINER_MODULES.map((mod) => {
            const isSelected = mod.id === activeModule.id;
            return (
              <button
                key={mod.id}
                onClick={() => {
                  unlockAudioElement();
                  stopCurrentAudio();
                  setSelectedModuleId(mod.id);
                  setCurrentTime(0);
                  setIsPlaying(true);
                  setShowAllTopics(false);
                }}
                className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer space-y-1 ${
                  isSelected
                    ? 'bg-[#082F49] border-[#38BDF8] text-white'
                    : 'bg-[#0D1527] border-[#1E293B] hover:border-slate-600 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-[11px] font-mono font-bold text-[#38BDF8]">
                  <span>{mod.slideRangeLabel}</span>
                  <span className="text-emerald-300 tabular-nums">
                    {formatTimecode(mod.durationSec)}
                  </span>
                </div>
                <div className="text-xs font-semibold line-clamp-2 leading-snug">
                  {mod.title.en}
                </div>
                <div className="text-[11px] text-[#FACC15] khmer-text line-clamp-1">
                  {mod.title.km}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Two-Zone Video Studio Layout (Left 65% Clean Stacked Video Deck + Right 35% Scene Chapters) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left/Top Zone: Zero-Overlap Stacked Video Player */}
        <div className="lg:col-span-8 flex flex-col bg-[#050811] border border-[#1E293B] rounded-xl overflow-hidden">
          {/* 1. Video Title Strip */}
          <div className="px-4 py-3 bg-[#080D1A] border-b border-[#1E293B] space-y-0.5">
            {langMode !== 'km' && (
              <h4 className="text-sm font-bold text-white leading-snug">
                {activeModule.title.en}
              </h4>
            )}
            {langMode !== 'en' && (
              <p className="text-xs sm:text-sm font-bold text-[#FACC15] khmer-text leading-snug">
                {activeModule.title.km}
              </p>
            )}
          </div>

          {/* 2. Dedicated Non-Overlapping Scene & Math Formula Bar */}
          <div className="px-4 py-2.5 bg-[#060A14] border-b border-[#1E293B] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] tabular-nums">
              <span className="font-bold">
                Scene {activeSceneIndex + 1} / {activeModule.scenes.length}
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">{formatTimecode(currentTime)}</span>
            </div>

            <div className="px-3 py-1 rounded-lg bg-[#03060C] border border-[#0EA5E9]/35 text-emerald-300 overflow-x-auto max-w-full">
              <MathEquationDisplay equation={activeScene.formulaLatex} />
            </div>
          </div>

          {/* 3. Pure Uncluttered 16:9 Animation Stage */}
          <div
            onClick={handlePlayPause}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                handlePlayPause();
              }
            }}
            aria-label={isPlaying ? 'Pause explainer video' : 'Play explainer video'}
            className="relative aspect-[16/9] bg-[#04070E] cursor-pointer select-none overflow-hidden flex items-center justify-center group"
          >
            <div className="w-full h-full px-3 py-2 sm:px-6 sm:py-3">
              {renderAnimatedSceneStage()}
            </div>

            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/35 group-hover:bg-black/20 transition-colors">
                <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#0284C7] group-hover:bg-[#38BDF8] text-white font-bold text-xs shadow-[0_0_28px_rgba(14,165,233,0.55)] transition-transform group-hover:scale-105">
                  {currentTime >= activeModule.durationSec - 0.05 ? (
                    <>
                      <RotateCcw className="w-4 h-4" />
                      <span>ចាក់ឡើងវិញ · Replay</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      <span>{currentTime > 0 ? 'បន្តចាក់ · Resume' : 'ចាក់វីដេអូ · Play Video'}</span>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 4. Dedicated Subtitle / Caption Dock BELOW the Graph */}
          {showCaptions && (
            <div className="bg-[#060A14] border-t border-[#1E293B] px-5 py-3.5 space-y-1.5">
              {langMode !== 'km' && (
                <p className="text-xs sm:text-sm font-medium text-slate-100 leading-relaxed text-center">
                  {activeScene.caption.en}
                </p>
              )}
              {langMode !== 'en' && (
                <p className="text-xs sm:text-sm font-semibold text-[#FACC15] khmer-text leading-relaxed text-center">
                  {activeScene.caption.km}
                </p>
              )}
            </div>
          )}

          {/* 5. Interactive Timeline Scrubber & Video Transport Controls */}
          <div className="bg-[#080D1A] border-t border-[#1E293B] p-3.5 space-y-3">
            <div className="relative flex items-center">
              <input
                type="range"
                min={0}
                max={activeModule.durationSec}
                step={0.05}
                value={currentTime}
                onChange={(e) => {
                  const targetSec = Number(e.target.value);
                  const inSameScene =
                    targetSec >= activeScene.startSec &&
                    targetSec < activeScene.endSec;

                  if (
                    inSameScene &&
                    voiceEnabled &&
                    isAudioDrivenRef.current &&
                    audioRef.current &&
                    Number.isFinite(audioRef.current.duration) &&
                    audioRef.current.duration > 0.2
                  ) {
                    const span = Math.max(0.1, activeScene.endSec - activeScene.startSec);
                    const frac = clamp01((targetSec - activeScene.startSec) / span);
                    audioRef.current.currentTime = frac * audioRef.current.duration;
                    setCurrentTime(targetSec);
                  } else {
                    stopCurrentAudio();
                    setCurrentTime(targetSec);
                  }
                }}
                aria-label="Video timeline scrubber"
                className="w-full h-2 accent-[#38BDF8] cursor-pointer rounded-lg"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handlePlayPause}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0284C7] hover:bg-[#0EA5E9] text-white text-xs font-bold transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5" />
                      <span>{currentTime > 0 && currentTime < activeModule.durationSec ? 'Resume' : 'Play Video'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleJumpScene(activeSceneIndex - 1)}
                  disabled={activeSceneIndex === 0}
                  title="Previous Scene"
                  className="p-2 rounded-lg bg-[#111C30] hover:bg-[#1E293B] border border-[#1E293B] text-slate-300 hover:text-white disabled:opacity-35 cursor-pointer disabled:cursor-not-allowed"
                >
                  <SkipBack className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleJumpScene(activeSceneIndex + 1)}
                  disabled={activeSceneIndex === activeModule.scenes.length - 1}
                  title="Next Scene"
                  className="p-2 rounded-lg bg-[#111C30] hover:bg-[#1E293B] border border-[#1E293B] text-slate-300 hover:text-white disabled:opacity-35 cursor-pointer disabled:cursor-not-allowed"
                >
                  <SkipForward className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleRestart}
                  title="Replay from 00:00"
                  className="p-2 rounded-lg bg-[#111C30] hover:bg-[#1E293B] border border-[#1E293B] text-slate-300 hover:text-white cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <span className="ml-1.5 text-xs font-mono text-slate-300 tabular-nums whitespace-nowrap shrink-0">
                  {formatTimecode(currentTime)} / {formatTimecode(activeModule.durationSec)}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                <button
                  onClick={handleCycleSpeed}
                  title="Playback Speed"
                  className="inline-flex items-center gap-1 px-2.5 py-2 rounded-lg bg-[#111C30] hover:bg-[#1E293B] border border-[#1E293B] text-xs font-mono font-bold text-[#38BDF8] cursor-pointer whitespace-nowrap shrink-0 tabular-nums"
                >
                  <Gauge className="w-3.5 h-3.5" />
                  <span>{playbackSpeed}x</span>
                </button>

                <button
                  onClick={() => setShowCaptions((prev) => !prev)}
                  title="Toggle Subtitles"
                  className={`inline-flex items-center gap-1 px-2.5 py-2 rounded-lg border text-xs font-semibold cursor-pointer whitespace-nowrap shrink-0 ${
                    showCaptions
                      ? 'bg-[#082F49] border-[#0284C7] text-[#38BDF8]'
                      : 'bg-[#111C30] border-[#1E293B] text-slate-400'
                  }`}
                >
                  <Subtitles className="w-3.5 h-3.5" />
                  <span>CC</span>
                </button>

                {/* Spoken Voice Language Selector (Khmer / English) */}
                <div className="inline-flex items-center bg-[#050811] border border-[#1E293B] rounded-lg p-0.5">
                  <button
                    onClick={() => {
                      unlockAudioElement();
                      stopCurrentAudio();
                      setVoiceLang('km');
                      setVoiceEnabled(true);
                    }}
                    title="Speak natural Khmer narration"
                    className={`px-2 py-1.5 rounded text-[11px] font-bold khmer-text cursor-pointer whitespace-nowrap transition-colors ${
                      voiceLang === 'km'
                        ? 'bg-[#0284C7] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    ខ្មែរ
                  </button>
                  <button
                    onClick={() => {
                      unlockAudioElement();
                      stopCurrentAudio();
                      setVoiceLang('en');
                      setVoiceEnabled(true);
                    }}
                    title="Speak natural English narration"
                    className={`px-2 py-1.5 rounded text-[11px] font-bold cursor-pointer whitespace-nowrap transition-colors ${
                      voiceLang === 'en'
                        ? 'bg-[#0284C7] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                </div>

                {/* AI Studio Voice Narration Toggle */}
                <button
                  onClick={() => {
                    if (voiceEnabled) {
                      stopCurrentAudio();
                      setVoiceEnabled(false);
                    } else {
                      unlockAudioElement();
                      setVoiceEnabled(true);
                    }
                  }}
                  title="Toggle AI Studio Voice Narration (Auto ON)"
                  className={`inline-flex items-center gap-1.5 px-2.5 py-2 rounded-lg border text-xs font-semibold cursor-pointer whitespace-nowrap shrink-0 ${
                    voiceEnabled
                      ? 'bg-emerald-950 border-emerald-500 text-emerald-300'
                      : 'bg-[#111C30] border-[#1E293B] text-slate-400 hover:text-white'
                  }`}
                >
                  {isVoiceLoading ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-[#FACC15]" />
                  ) : voiceEnabled ? (
                    <Volume2 className="w-3.5 h-3.5" />
                  ) : (
                    <VolumeX className="w-3.5 h-3.5" />
                  )}
                  <span className="khmer-text">
                    {isVoiceLoading
                      ? 'កំពុងផ្ទុកសំឡេង...'
                      : voiceEnabled
                      ? `សំឡេង អូតូ (${voiceLang === 'km' ? 'ខ្មែរ' : 'EN'})`
                      : 'បិទសំឡេង'}
                  </span>
                </button>
              </div>
            </div>

            {voiceError && (
              <div className="px-3.5 py-2.5 rounded-lg bg-amber-950/50 border border-amber-500/40 text-xs text-amber-200 khmer-text leading-relaxed">
                {voiceError}
              </div>
            )}
          </div>
        </div>

        {/* Right Zone: Scene Chapters & Key Takeaway Deck */}
        <div className="lg:col-span-4 flex flex-col justify-between bg-[#060A14] border border-[#1E293B] rounded-xl p-4 space-y-3">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#1E293B] pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                Scene Chapters · ឈុតពន្យល់
              </span>
              {onJumpToSlide && !activeModule.targetPages.includes(slideNumber) && (
                <button
                  onClick={() => onJumpToSlide(activeModule.targetPages[0])}
                  className="text-[11px] font-mono text-amber-300 hover:underline cursor-pointer"
                >
                  Go to Slide {activeModule.targetPages[0]} →
                </button>
              )}
            </div>

            <div className="space-y-2">
              {activeModule.scenes.map((scene, sIdx) => {
                const isActive = sIdx === activeSceneIndex;
                return (
                  <button
                    key={scene.id}
                    onClick={() => {
                      handleJumpScene(sIdx);
                      setIsPlaying(true);
                    }}
                    className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer space-y-1 ${
                      isActive
                        ? 'bg-[#082F49]/75 border-[#38BDF8] shadow-sm'
                        : 'bg-[#0B1222] border-[#1E293B] hover:border-slate-600'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-[11px] font-mono tabular-nums">
                      <span className={isActive ? 'text-[#38BDF8] font-bold' : 'text-slate-400'}>
                        {formatTimecode(scene.startSec)} – {formatTimecode(scene.endSec)}
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 ${
                          isActive ? 'text-[#FACC15]' : 'text-slate-600'
                        }`}
                      />
                    </div>
                    {langMode !== 'km' && (
                      <div className="text-xs font-bold text-white leading-snug">
                        {scene.title.en}
                      </div>
                    )}
                    {langMode !== 'en' && (
                      <div className="text-xs text-[#FACC15] khmer-text leading-snug">
                        {scene.title.km}
                      </div>
                    )}
                    {isActive && (
                      <svg
                        viewBox="0 0 100 3"
                        preserveAspectRatio="none"
                        className="w-full h-1 rounded-full mt-1.5 block"
                      >
                        <rect x="0" y="0" width="100" height="3" fill="#0F172A" />
                        <rect
                          x="0"
                          y="0"
                          width={Math.max(2, Math.round(sceneProgress * 100))}
                          height="3"
                          fill="#38BDF8"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0D1527] border border-[#1E293B] space-y-1">
            <div className="text-[11px] font-mono uppercase text-emerald-400 font-bold">
              Active Scene Takeaway · ចំណុចសំខាន់
            </div>
            {langMode !== 'km' && (
              <p className="text-xs text-slate-200 leading-relaxed">
                {activeScene.keyTakeaway.en}
              </p>
            )}
            {langMode !== 'en' && (
              <p className="text-xs text-[#FEF08A] khmer-text leading-relaxed">
                {activeScene.keyTakeaway.km}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
