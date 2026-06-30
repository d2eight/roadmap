import {prisma} from "database";
import {promptSchemaType} from "shared-types";

export async function getGuide(userId: string, guideId: string) {
  return prisma.guide.findUnique({
    where: {
      id: guideId,
      userId: userId
    },
    include: {
      questions: {
        include: {
          AiQuestionABCD: true,
          AiQuestionRange: true,
          AiQuestion: true,
          AiQuestionCheckbox: true,
        }
      }
    }
  });
}

export async function createEmptyGuide(promptData: promptSchemaType, userId: string) {
  return prisma.guide.create({
    data: {
      prompt: promptData.prompt,
      userId: userId
    }
  })
}

