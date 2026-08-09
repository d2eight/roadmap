import { Session, User } from 'better-auth';
import { questionsSchemaType } from './shared-zod-types';
import { Dispatch, SetStateAction } from 'react';
import { BetterFetchError } from '@better-fetch/fetch';
import { Socket } from 'socket.io-client';
import { Prisma } from 'database';
import { GuideStepModel } from '@/libs/db/generated/prisma/models/GuideStep';
import { ApiError } from './shared-classes';
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

// export type ApiError = {
//   message: string;
//   code: number;
// };

export type GuideJob = {
  userId: string;
  guideId: string;
  prompt: string;
  answeredQuestions?: questionsSchemaType;
};

export type AuthContextType = {
  data: BetterAuthSession;
  refetch: () => Promise<void>;
  isPending: boolean;
  error: BetterFetchError | null;
};

export type GuideContextType = {
  guide: GuideModelWithRelations;
  setGuide: Dispatch<SetStateAction<GuideModelWithRelations>>;
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

