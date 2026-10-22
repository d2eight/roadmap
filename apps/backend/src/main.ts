import express from 'express';
import cors from 'cors';

import { fromNodeHeaders, toNodeHandler } from 'better-auth/node';
import { auth } from 'auth';
import { guidesRouter } from './features/guides/guides.routes';
import { Queue } from 'bullmq';
import initWorkers from './workers/workers';
import { createServer } from 'node:http';
import { getIO, initSocket } from './socket';
import { env } from 'env';

export const app = express();
export const server = createServer(app);
initSocket(server);
const io = getIO();

export const guideGenerationQueue = new Queue('guideGenerationQueue');
export const guideQuestionsGenerationQueue = new Queue(
  'guideQuestionsGenerationQueue',
);

app.use(
  cors({
    origin: env.NEXT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.all('/api/auth/*any', toNodeHandler(auth));

app.use(guidesRouter);

const port = 3333;

server.listen(port, () => {
  initWorkers();
});

server.on('error', console.error);
