import { Session, User } from 'better-auth';
import { questionsSchemaType } from './shared-zod-types';
import { QueryObserverBaseResult, UseQueryResult } from '@tanstack/react-query';

export type BetterAuthSession = {
  session: Session;
  user: User;
} | null;

// export type ApiSuccessResponse<T> = {
//   success: true;
//   data: T;
// };
//
// export type ApiErrorResponse = {
//   success: false;
//   error: {
//     message: string;
//     details?: unknown;
//   };
// };
//
// export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

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
