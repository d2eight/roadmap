import { Session, User } from 'better-auth';
import {
    aiQuestionsSchemaType,
    filterSchemaType,
    guideQuestionsSchemaType,
    paramsSchemaType,
} from './shared-zod-types';
import { Dispatch, JSX, SetStateAction } from 'react';
import { BetterFetchError } from '@better-fetch/fetch';
import { Socket } from 'socket.io-client';
import { Prisma } from 'database';
import { GuideProgressStatus, GuideStatus } from 'database/enums';
import {
    NotFoundError,
    StatusError,
    TooManyRequestsError,
    UnauthorizedError,
    UnexpectedError,
    UnprocessableEntity,
} from 'errors';
import { JsonValue } from '@prisma/client/runtime/client';
import { NextResponse } from 'next/server';
import { ZodSafeParseResult } from 'zod';
import { GuideStepStatus } from 'database/enums';

export type BetterAuthSession = {
    session: Session;
    user: User;
} | null;

export type ApiResponse<T = null, Z = null> =
    | {
          success: true;
          data: T;
      }
    | {
          success: false;
          message: string;
          zodError: Z;
      };

export type ApiResponseError<Z = null> = Extract<
    ApiResponse<null, Z>,
    { success: false }
>;

export type ApiResponseSuccess<T = null> = Extract<
    ApiResponse<T, null>,
    { success: true }
>;

export type ApiErrors<ZodError = null> =
    | UnauthorizedError
    | NotFoundError
    | UnprocessableEntity<ZodError>
    | UnexpectedError
    | TooManyRequestsError
    | StatusError

export type GuideJob = {
    userId: string;
    guideId: string;
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
          status: typeof GuideStatus.QUESTIONS_GENERATED;
          completedSteps?: never;
          questionsCount: number;
          stepsCount?: never;
          parsedQuestions: ZodSafeParseResult<aiQuestionsSchemaType>;
          parsedAnswers?: never;
          currentStep?: never;
      }
    | {
          guide: GuideModelWithRelations;
          status: typeof GuideStatus.GUIDE_GENERATED;
          completedSteps: number;
          questionsCount?: never;
          stepsCount: number;
          parsedQuestions: ZodSafeParseResult<aiQuestionsSchemaType>;
          parsedAnswers: ZodSafeParseResult<guideQuestionsSchemaType>;
          currentStep: GuideStepModelFetched | null;
      }
    | {
          guide: GuideModelWithRelations;
          status: Exclude<
              GuideStatus,
              | typeof GuideStatus.QUESTIONS_GENERATED
              | typeof GuideStatus.GUIDE_GENERATED
          >;
          completedSteps?: never;
          questionsCount?: never;
          stepsCount?: never;
          parsedQuestions?: never;
          parsedAnswers?: never;
          currentStep?: never;
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

export type PromptType = {
    userPrompt: string;
    answers?: JsonValue;
};

export type WidthLabel = '2xl' | 'xl' | 'lg' | 'md' | 'sm';

export type WidthItem = {
    size: number;
    label: WidthLabel;
};

export type WidthInfo = {
    label: WidthLabel;
    isDesktop: boolean;
};

export type ScrollInfo = {
    onTop: boolean;
    scrollY: number;
};

export type RouteIdParams = {
    params: Promise<{
        id: string;
    }>;
};

export type VerifySessionResponse =
    | {
          success: true;
          data: NonNullable<BetterAuthSession>;
      }
    | {
          success: false;
          redirect: NextResponse;
      };

export type SearchParamsNext = Promise<{
    [key: string]: string | string[] | undefined;
}>;

export type UsersGuidesStatistics = Record<GuideProgressStatus, number>;
export type UsersStepsStatistics = Record<GuideStepStatus, number>;
export type UsersActivityItem = {
    date: Date | string;
    createdCount: number;
    doneCount: number;
};
export type UsersActivity = UsersActivityItem[];

export type UsersStatistics = {
    guidesCounts: UsersGuidesStatistics;
    stepsCounts: UsersStepsStatistics;
};
