import {Session, User} from "better-auth";
import {GuideGetPayload} from "@/libs/db/generated/prisma/models/Guide";
import {Prisma} from "../../../db/generated/prisma/client";

export type BetterAuthSession = {
  session: Session;
  user: User
} | null

export type ApiSuccessResponse<T> = {
  success: true;
  data: T;
};

export type ApiErrorResponse = {
  success: false;
  error: {
    message: string;
    details?: unknown;
  };
};

export type ApiResponse<T> =
  | ApiSuccessResponse<T>
  | ApiErrorResponse;

export type GuideWithQuestions = Prisma.GuideGetPayload<{
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
}>

// export type GuideWithQuestions = GuideGetPayload