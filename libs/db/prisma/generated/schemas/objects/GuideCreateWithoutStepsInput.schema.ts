import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { GuideProgressStatusSchema } from '../enums/GuideProgressStatus.schema';
import { UserCreateNestedOneWithoutGuidesInputObjectSchema as UserCreateNestedOneWithoutGuidesInputObjectSchema } from './UserCreateNestedOneWithoutGuidesInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  prompt: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  questions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  answeredQuestions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  externalAiQuestionsStatus: z.boolean().optional(),
  status: GuideStatusSchema.optional(),
  progressStatus: GuideProgressStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutGuidesInputObjectSchema)
}).strict();
export const GuideCreateWithoutStepsInputObjectSchema: z.ZodType<Prisma.GuideCreateWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCreateWithoutStepsInput>;
export const GuideCreateWithoutStepsInputObjectZodSchema = makeSchema();
