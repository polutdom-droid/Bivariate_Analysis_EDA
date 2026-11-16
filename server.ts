import 'dotenv/config';
import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { generateTtsResponse } from './api/tts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  // Studio-grade Bilingual Text-to-Speech Endpoint (shared with Vercel Serverless /api/tts.ts)
  app.post('/api/tts', async (req: Request, res: Response) => {
    const result = await generateTtsResponse(
      (req.body || {}) as { sceneId?: string; text?: string; lang?: 'km' | 'en' }
    );
    res.setHeader('Cache-Control', 'no-store');
    res.status(result.status).json(result.body);
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
