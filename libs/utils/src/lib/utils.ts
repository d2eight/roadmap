'use server';

import { prisma } from 'database';
import { promptSchemaType } from 'shared-types';

export async function getGuide(userId: string, guideId: string) {
  return prisma.guide.findUnique({
    where: {
      id: guideId,
      userId: userId,
    },
    include: {
      steps: {
        select: {
          id: true,
          guideId: true,
          title: true,
          description: true,
          status: true
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
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

export async function getGuidesInPagination({
  currentPage,
  pageSize,
  userId,
}: {
  currentPage: number;
  pageSize: number;
  userId: string;
}) {
  return prisma.$transaction([
    prisma.guide.findMany({
      where: {
        userId: userId,
      },
      include: {
        steps: true,
      },
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: "desc"
      }
    }),
    prisma.guide.count({
      where: {
        userId: userId,
      },
    }),
  ]);
}
