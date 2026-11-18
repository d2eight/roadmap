import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { GuideProgressStatusSchema } from '../enums/GuideProgressStatus.schema';
import { GuideStepCreateNestedManyWithoutGuideInputObjectSchema as GuideStepCreateNestedManyWithoutGuideInputObjectSchema } from './GuideStepCreateNestedManyWithoutGuideInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  prompt: z.string(),
  externalAiQuestionsStatus: z.boolean().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  questions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  answeredQuestions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  status: GuideStatusSchema.optional(),
  progressStatus: GuideProgressStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  steps: z.lazy(() => GuideStepCreateNestedManyWithoutGuideInputObjectSchema).optional()
}).strict();
export const GuideCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.GuideCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCreateWithoutUserInput>;
export const GuideCreateWithoutUserInputObjectZodSchema = makeSchema();
