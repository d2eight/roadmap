import { Job, Worker } from 'bullmq';
import { GuideJob } from 'shared-types';
import { aiCreateGuideQuestions } from './workersFunctions/aiCreateGuideQuestions';
import { aiCreateGuide } from './workersFunctions/aiCreateGuide';

export default function initWorkers() {
  const guideGenerationWorker = new Worker(
    'guideGenerationQueue',
    async (job: Job<GuideJob>) => {
      await aiCreateGuide(job);
    },
    {
      connection: {
        host: 'localhost',
        port: 6379,
      },
    },
  );

  const guideQuestionsGenerationWorker = new Worker(
    'guideQuestionsGenerationQueue',
    async (job: Job<GuideJob>) => {
      await aiCreateGuideQuestions(job);
    },
    {
      connection: {
        host: 'localhost',
        port: 6379,
      },
    },
  );
}
