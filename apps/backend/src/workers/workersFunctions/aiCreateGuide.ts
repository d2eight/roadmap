import {Job} from "bullmq";
import {generateText, Output} from "ai";
import {prisma} from "database";
import {aiGuideGenerationSchema, GuideJob, questionsSchemaType} from "shared-types";
import {openai} from "@ai-sdk/openai";
import {GuideStepCreateManyInput} from "@/libs/db/generated/prisma/models/GuideStep";

export async function aiCreateGuide(job: Job<GuideJob>) {
  const answeredQuestions: questionsSchemaType = job.data.answeredQuestions;
  const guideId: string = job.data.guideId;
  const userId: string = job.data.userId;
  const prompt: string = job.data.prompt;

  await prisma.guide.update({
    where: {
      id: guideId,
      userId: userId
    },
    data: {
      status: "GUIDE_GENERATION",
      ...(answeredQuestions && {answeredQuestions: answeredQuestions})
    }
  });

  const aiPrompt: string = answeredQuestions
    ? `Generate a new guide, for this user prompt: ${prompt}. Generate it, like you are a expert in requested topic. We've asked our user questions, and he answered them. Create a highly personalized guide based on these answers: ${JSON.stringify(answeredQuestions)}. Follow the output schema`
    : `Generate a new guide, for this user prompt: ${prompt}. Generate it, like you are a expert in requested topic. Follow the output schema`

  const {output} = await generateText({
    model: openai("gpt-5.4-mini"),
    output: Output.object({
      schema: aiGuideGenerationSchema,
    }),
    prompt: aiPrompt,
  })

  await prisma.guide.update({
    where: {
      id: guideId,
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
      guideId: guideId,
    }
  })

  await prisma.guideStep.createMany({
    data: guideSteps,
  })
}
