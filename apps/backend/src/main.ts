import express from 'express';
import cors from 'cors';

import { toNodeHandler } from 'better-auth/node';
import { auth } from 'auth';
import { guidesRouter } from './features/guides/guides.routes';
import Redis from 'ioredis';
import { Queue } from 'bullmq';
import initWorkers from './workers/workers';
export const app = express();

export const redis = new Redis();
export const guideGenerationQueue = new Queue('guideGenerationQueue');
export const guideQuestionsGenerationQueue = new Queue(
  'guideQuestionsGenerationQueue',
);
export const guideGenerationWithAnsweredQuestionsQueue = new Queue(
  'guideGenerationWithAnsweredQuestionsQueue',
);

app.use(
  cors({
    origin: 'http://localhost:4444',
    credentials: true,
  }),
);

app.use(express.json());
app.all('/api/auth/*any', toNodeHandler(auth));

app.use(guidesRouter);

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  initWorkers();
});

server.on('error', console.error);
