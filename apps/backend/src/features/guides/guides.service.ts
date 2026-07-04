import express from "express";
import {promptSchemaType, questionsSchemaType} from "shared-types";
import {prisma} from "database";
import {GuideModel} from "@/libs/db/generated/prisma/models/Guide";
import {
  guideGenerationQueue,
  guideGenerationWithAnsweredQuestionsQueue,
  guideQuestionsGenerationQueue
} from "@/apps/backend/src/main";
import {createEmptyGuide} from "utils";

export async function create(prompt: string, userId: string): Promise<string> {
  const newGuide = await createEmptyGuide(prompt, userId);

  await guideGenerationQueue.add(
    'newGuide',
    {
      guideId: newGuide.id,
      userId: userId,
      prompt: prompt
    },
    { jobId: newGuide.id }
  );

  return newGuide.id;
}

export async function createQuestions(prompt: string, userId: string): Promise<string> {
  const newGuide = await createEmptyGuide(prompt, userId);

  await guideQuestionsGenerationQueue.add(
    'newGuide_Questions',
    {
      guideId: newGuide.id,
      userId: userId,
      prompt: prompt
    },
    { jobId: newGuide.id }
  );

  return newGuide.id;
}

export async function createWithAnsweredQuestions(prompt: string, answeredQuestions: questionsSchemaType, guideId: string, userId: string) {
  await guideGenerationQueue.add(
    'newGuide_withAnsweredQuestions',
    {
      prompt: prompt,
      answeredQuestions: answeredQuestions,
      userId: userId,
      guideId: guideId
    },
    { jobId: guideId }
  )
}
