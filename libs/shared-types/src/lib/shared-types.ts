import { Session, User } from 'better-auth';
import {
  answeredQuestionsSchemaType,
  filterSchemaType,
  paramsSchemaType,
} from './shared-zod-types';
import { Dispatch, JSX, SetStateAction } from 'react';
import { BetterFetchError } from '@better-fetch/fetch';
import { Socket } from 'socket.io-client';
import { Prisma } from 'database';
import { ApiError } from './shared-classes';

import { GuideStatus } from 'database/enums';

// import { ApiError } from '@/apps/frontend/src/customClasses/apiError';

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

export type GuideJob = {
  userId: string;
  guideId: string;
  prompt: string;
  answeredQuestions?: answeredQuestionsSchemaType;
};

export type AuthContextType = {
  data: BetterAuthSession;
  refetch: () => Promise<void>;
  isPending: boolean;
  error: BetterFetchError | null;
};

export type DialogContextType = {
  dialogStatus: boolean;
  setDialogStatus: Dispatch<SetStateAction<boolean>>;
};

export type GuideContextType =
  | {
      guide: GuideModelWithRelations;
      status: (typeof GuideStatus)['QUESTIONS_GENERATED'];
      setGuide: Dispatch<SetStateAction<GuideModelWithRelations>>;
      completedSteps?: number;
      questionsCount: number;
    }
  | {
      guide: GuideModelWithRelations;
      status: (typeof GuideStatus)['GUIDE_GENERATED'];
      setGuide: Dispatch<SetStateAction<GuideModelWithRelations>>;
      completedSteps: number;
      questionsCount?: never;
    }
  | {
      guide: GuideModelWithRelations;
      status: Exclude<
        GuideStatus,
        | (typeof GuideStatus)['QUESTIONS_GENERATED']
        | (typeof GuideStatus)['GUIDE_GENERATED']
      >;
      setGuide: Dispatch<SetStateAction<GuideModelWithRelations>>;
      completedSteps?: number;
      questionsCount?: never;
    };

export type SocketContextType = {
  socket: Socket;
};

export type GuideModelWithRelations = Prisma.GuideGetPayload<{
  include: {
    steps: {
      select: {
        id: true;
        guideId: true;
        title: true;
        description: true;
        status: true;
      };
    };
  };
}>;

export type GuideStepModelFetched = Prisma.GuideStepGetPayload<{
  select: {
    id: true;
    guideId: true;
    title: true;
    description: true;
    status: true;
  };
}>;

export type OrderByOptions = [
  {
    value: Extract<filterSchemaType['orderBy'], 'createdAt'>;
    label: string | JSX.Element;
  },
  {
    value: Extract<filterSchemaType['orderBy'], 'updatedAt'>;
    label: string | JSX.Element;
  },
];

export type QueryKeyType = [
  'guides',
  paramsSchemaType['page'],
  paramsSchemaType['orderBy'],
  paramsSchemaType['progressStatus'],
];
