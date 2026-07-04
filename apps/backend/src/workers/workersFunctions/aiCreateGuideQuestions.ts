import {GuideModel} from "@/libs/db/generated/prisma/models/Guide";
import {prisma} from "database";
import {generateText, Output} from "ai";
import {openai} from "@ai-sdk/openai";
import {aiQuestionsSchema, GuideJob} from "shared-types";
import {Job} from "bullmq";

export async function aiCreateGuideQuestions(job: Job<GuideJob>) {
  const guideId: string = job.data.guideId;
  const userId: string = job.data.userId;
  const prompt: string = job.data.prompt;

  await prisma.guide.update({
    where: {
      id: guideId,
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
    prompt: `Generate a questions, which will improve our understanding for this user prompt: ${prompt}. We will use them, to ask a user for more deep undarstanding of his purposes, competencies about requested topic. Do not create any questions about timestamps. You must create four questions. Question with A B C D answers, where the only one can be choosen. Question with range answer, where user answers on the question by choosing some number from 1 to 100. Question, where user answers with text input. Question with checkboxes, where user can choose multiple answers. Follow the schema for generation such a questions.`,
  })


  await prisma.guide.update({
    where: {
      id: guideId,
      userId: userId
    },
    data: {
      status: "QUESTIONS_GENERATED",
      questions: JSON.stringify(output)
    }
  })
}
