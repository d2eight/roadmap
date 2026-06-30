import express from "express";
import {promptSchemaType} from "shared-types";
import {prisma} from "database";
import {GuideModel} from "@/libs/db/generated/prisma/models/Guide";
import {guideGenerationQueue, guideQuestionsGenerationQueue} from "@/apps/backend/src/main";
import {createEmptyGuide} from "utils";

export async function create(promptData: promptSchemaType, userId: string): Promise<GuideModel> {
  const newGuide = await createEmptyGuide(promptData, userId);

  await guideGenerationQueue.add(
    'newGuide',
    {
      guide: newGuide,
      userId: userId
    },
    { jobId: newGuide.id }
  );

  return newGuide;
}

export async function createQuestions(promptData: promptSchemaType, userId: string) {
  const newGuide = await createEmptyGuide(promptData, userId);

  await guideQuestionsGenerationQueue.add(
    'newGuide_Questions',
    {
      guide: newGuide,
      userId: userId
    },
    { jobId: newGuide.id }
  );

  return newGuide;
}

export async function createGuideWithAnsweredQuestions() {

}
