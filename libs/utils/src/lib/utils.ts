import { prisma } from 'database';
import { promptSchemaType } from 'shared-types';

export async function getGuide(userId: string, guideId: string) {
  return prisma.guide.findUnique({
    where: {
      id: guideId,
      userId: userId,
    },
    include: {
      steps: true,
    },
  });
}

export async function createEmptyGuide(userPrompt: string, userId: string) {
  return prisma.guide.create({
    data: {
      prompt: userPrompt,
      userId: userId,
    },
  });
}
