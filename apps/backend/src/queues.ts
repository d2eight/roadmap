import { Queue } from 'bullmq';
import { redisConnectionConfig } from './redis';

export const guideGenerationQueue = new Queue('guideGenerationQueue', {
  connection: redisConnectionConfig,
});

export const guideQuestionsGenerationQueue = new Queue(
  'guideQuestionsGenerationQueue',
  {
    connection: redisConnectionConfig,
  },
);
