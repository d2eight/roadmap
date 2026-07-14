import express from 'express';
import cors from 'cors';

import { fromNodeHeaders, toNodeHandler } from 'better-auth/node';
import { auth } from 'auth';
import { guidesRouter } from './features/guides/guides.routes';
import Redis from 'ioredis';
import { Queue } from 'bullmq';
import initWorkers from './workers/workers';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { Socket } from 'node:net';
import { prisma } from 'database';
import { generateText, Output } from 'ai';
import { openai } from '@ai-sdk/openai';
import { aiGuideGenerationSchema } from 'shared-types';
import { GuideStepCreateManyInput } from '@/libs/db/generated/prisma/models/GuideStep';
export const app = express();
const server = createServer(app);
export const io = new Server(server, {
  cors: {
    origin: 'http://localhost:4444',
    credentials: true,
  },
});

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

server.listen(port, () => {
  initWorkers();
});

io.use(async (socket, next) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(socket.request.headers),
  });

  if (!session) {
    return next(new Error('No such session'));
  }

  socket.data.id = session.user.id;
  next();
});

io.on('connection', (socket) => {
  socket.join(socket.data.id);
});

server.on('error', console.error);
