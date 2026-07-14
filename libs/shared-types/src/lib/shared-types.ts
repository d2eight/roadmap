import { Session, User } from 'better-auth';
import { questionsSchemaType } from './shared-zod-types';
import { QueryObserverBaseResult, UseQueryResult } from '@tanstack/react-query';
import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import { Dispatch, SetStateAction } from 'react';
import { Prisma } from '@/libs/db/generated/prisma/client';

export type BetterAuthSession = {
  session: Session;
  user: User;
} | null;

export type ApiResponse<T = null> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: ApiError;
    };

export type ApiError = {
  message: string;
  code: number;
};

export type GuideJob = {
  userId: string;
  guideId: string;
  prompt: string;
  answeredQuestions?: questionsSchemaType;
};

export type AuthContextType = {
  data: BetterAuthSession;
  refetch: UseQueryResult<BetterAuthSession, Error>['refetch'];
  isError: boolean;
};

export type GuideContextType = {
  guide: GuideModelWithRelations;
  setGuide: Dispatch<SetStateAction<GuideModelWithRelations>>;
};

export type GuideModelWithRelations = Prisma.GuideGetPayload<{
  include: {
    steps: true;
  };
}>;
