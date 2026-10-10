import { Job, UnrecoverableError, Worker } from 'bullmq';
import { GuideJob } from 'shared-types';
import { aiCreateGuideQuestions } from './workersFunctions/aiCreateGuideQuestions';
import { aiCreateGuide } from './workersFunctions/aiCreateGuide';
import { getGuide } from 'utils';
import { prisma } from 'database';
import { setGuideFailure } from '@/apps/backend/src/features/guides/guides.service';
import { io } from '@/apps/backend/src/main';

async function handleGuideJobFailure(
  job: Job<GuideJob> | undefined,
  error: Error,
) {
  if (!job || error instanceof UnrecoverableError) {
    return;
  }

  const maxAttempts = job.opts.attempts || 1;
  const isFinalAttempt = job.attemptsMade >= maxAttempts;
  if (isFinalAttempt) {
    const guideFailure = await setGuideFailure({
      guideId: job.data.guideId,
      userId: job.data.userId,
    });

    io.to(job.data.userId).emit('guide_update', {
      ...guideFailure,
    });
  }
}

export default function initWorkers() {
  const connection = {
    host: 'localhost',
    port: 6379,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
  };

  const guideGenerationWorker = new Worker(
    'guideGenerationQueue',
    async (job: Job<GuideJob>) => {
      const guide = await getGuide({
        userId: job.data.userId,
        guideId: job.data.guideId,
      });

      if (!guide) {
        throw new UnrecoverableError('Unknown error');
      }

      await aiCreateGuide(guide);
    },
    {
      connection,
    },
  );

  const guideQuestionsGenerationWorker = new Worker(
    'guideQuestionsGenerationQueue',
    async (job: Job<GuideJob>) => {
      const guide = await getGuide({
        userId: job.data.userId,
        guideId: job.data.guideId,
      });

      if (!guide) {
        throw new UnrecoverableError('Unknown error');
      }

      await aiCreateGuideQuestions(guide);
    },
    {
      connection,
    },
  );

  guideGenerationWorker.on('failed', async (job: Job<GuideJob>, error) => {
    return await handleGuideJobFailure(job, error);
  });

  guideQuestionsGenerationWorker.on(
    'failed',
    async (job: Job<GuideJob>, error) => {
      return await handleGuideJobFailure(job, error);
    },
  );
}
