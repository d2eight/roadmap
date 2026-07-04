import {Session, User} from "better-auth";
import {Prisma} from "../../../db/generated/prisma/client";
import {questionsSchemaType} from "@/libs/shared-types/src";

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

export type GuideJob = {
  userId: string,
  guideId: string,
  prompt: string,
  answeredQuestions?: questionsSchemaType
}