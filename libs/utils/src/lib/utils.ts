'use server';

import { prisma } from 'database';
import { paramsSchemaType } from 'shared-types';

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
          status: true,
        },
        orderBy: {
          id: 'asc',
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

export async function getGuides({
  pageSize,
  userId,
  params,
}: {
  pageSize: number;
  userId: string;
  params: paramsSchemaType;
}) {
  const currentPage = params.page;
  const orderBy = {
    [`${params.orderBy}`]: 'desc',
  };
  const progressStatus = params.progressStatus;

  return prisma.$transaction([
    prisma.guide.findMany({
      where: {
        userId: userId,
        progressStatus: {
          in: progressStatus,
        },
      },
      include: {
        steps: true,
      },
      skip: (currentPage - 1) * pageSize,
      take: pageSize,
      orderBy,
    }),
    prisma.guide.count({
      where: {
        userId: userId,
        progressStatus: {
          in: progressStatus,
        },
      },
    }),
  ]);
}
