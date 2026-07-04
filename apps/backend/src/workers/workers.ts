import {Job, Worker} from "bullmq";
import {GuideModel} from "@/libs/db/generated/prisma/models/Guide";
import {generateText, Output} from "ai";
import {aiGuideGenerationSchema, aiQuestionsSchema, GuideJob, questionsSchemaType} from "shared-types";
import {prisma} from "database";
import {GuideStepCreateManyInput, GuideStepModel} from "@/libs/db/generated/prisma/models/GuideStep";
import {openai} from "@ai-sdk/openai";
import Redis from "ioredis";
import {guideQuestionsGenerationQueue} from "@/apps/backend/src/main";
import {aiCreateGuide} from "@/apps/backend/src/workers/workersFunctions/aiCreateGuide";
import {aiCreateGuideQuestions} from "@/apps/backend/src/workers/workersFunctions/aiCreateGuideQuestions";

export default function initWorkers() {
  const guideGenerationWorker = new Worker('guideGenerationQueue', async (job: Job<GuideJob>) => {
    await aiCreateGuide(job)
  }, {
    connection: {
      host: 'localhost',
      port: 6379,
    }
  })

  const guideQuestionsGenerationWorker = new Worker('guideQuestionsGenerationQueue', async (job: Job<GuideJob>) => {
    await aiCreateGuideQuestions(job)
  }, {
    connection: {
      host: 'localhost',
      port: 6379,
    }
  })
}
