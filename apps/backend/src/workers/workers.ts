import {Job, Worker} from "bullmq";
import {GuideModel} from "@/libs/db/generated/prisma/models/Guide";
import {generateText, Output} from "ai";
import {aiGuideGenerationSchema, aiQuestionSchema, aiQuestionsSchema} from "shared-types";
import {prisma} from "database";
import {GuideStepCreateManyInput, GuideStepModel} from "@/libs/db/generated/prisma/models/GuideStep";
import {openai} from "@ai-sdk/openai";
import Redis from "ioredis";
import {guideQuestionsGenerationQueue} from "@/apps/backend/src/main";

export default function initWorkers() {
  const guideGenerationWorker = new Worker('guideGenerationQueue', async (job: Job) => {
    const guide: GuideModel = job.data.guide;
    const userId: string = job.data.userId;

    await prisma.guide.update({
      where: {
        id: guide.id,
        userId: userId
      },
      data: {
        status: "GUIDE_GENERATION"
      }
    });

    const {output} = await generateText({
      model: openai("gpt-5.4-mini"),
      output: Output.object({
        schema: aiGuideGenerationSchema,
      }),
      prompt: `Generate a new guide, for this user prompt: ${guide.prompt}. Generate it, like you are a expert in requested topic. Follow the output schema`,
    })

    await prisma.guide.update({
      where: {
        id: guide.id,
        userId: userId
      },
      data: {
        title: output.title,
        description: output.title,
        status: "GUIDE_GENERATED"
      }
    });

    const guideSteps: GuideStepCreateManyInput[] = output.steps.map((step) => {
      return {
        title: step.title,
        description: step.description,
        guideId: guide.id,
      }
    })

    await prisma.guideStep.createMany({
      data: guideSteps,
    })

  }, {
    connection: {
      host: 'localhost',
      port: 6379,
    }
  })

  const guideQuestionsGenerationWorker = new Worker('guideQuestionsGenerationQueue', async (job: Job) => {
    const guide: GuideModel = job.data.guide;
    const userId: string = job.data.userId;

    await prisma.guide.update({
      where: {
        id: guide.id,
        userId: userId
      },
      data: {
        status: "QUESTIONS_GENERATION"
      }
    });

    const {output} = await generateText({
      model: openai("gpt-5.4-mini"),
      output: Output.object({
        schema: aiQuestionsSchema,
      }),
      prompt: `Generate a questions, which will improve our understanding for this user prompt: ${guide.prompt}. We will use them, to ask a user for more deep undarstanding of his purposes, competencies about requested topic. Do not create any questions about timestamps. You must create four questions. Question with A B C D answers, where the only one can be choosen. Question with range answer, where user answers on the question by choosing some number from 1 to 100. Question, where user answers with text input. Question with checkboxes, where user can choose multiple answers. Follow the schema for generation such a questions.`,
    })

    await prisma.aiQuestions.create({
      data: {
        guideId: guide.id,
        AiQuestionABCD: {
          create: {
            ...output.AiQuestionABCD
          }
        },
        AiQuestion: {
          create: {
            ...output.AiQuestion
          }
        },
        AiQuestionRange: {
          create: {
            ...output.AiQuestionRange
          }
        },
        AiQuestionCheckbox: {
          create: {
            ...output.AiQuestionCheckbox
          }
        }
      }
    })

    await prisma.guide.update({
      where: {
        id: guide.id,
        userId: userId
      },
      data: {
        status: "QUESTIONS_GENERATED"
      }
    })

  }, {
    connection: {
      host: 'localhost',
      port: 6379,
    }
  })
}
