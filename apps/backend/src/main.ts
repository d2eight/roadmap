import express from 'express';
import cors from 'cors';

import {toNodeHandler} from "better-auth/node";
import {auth} from "auth";
import {guidesRouter} from "@/apps/backend/src/features/guides/guides.routes";
import Redis from "ioredis";
import {Queue} from "bullmq";
import initWorkers from "./workers/workers";
export const app = express();

export const redis = new Redis();
export const guideGenerationQueue = new Queue('guideGenerationQueue');
export const guideQuestionsGenerationQueue = new Queue('guideQuestionsGenerationQueue');
export const guideGenerationWithAnsweredQuestionsQueue = new Queue('guideGenerationWithAnsweredQuestionsQueue');

const port = process.env.PORT || 3333;

app.use(cors({
  origin: 'http://localhost:4444',
  credentials: true,
}))

app.all("/api/auth/*any", toNodeHandler(auth))

app.use(express.json());

app.use(guidesRouter);

const server = app.listen(port, () => {
  initWorkers();
});

server.on('error', console.error);


