import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckbox_AnswersSchema } from '../enums/AiQuestionCheckbox_Answers.schema'

const makeSchema = () => z.object({
  equals: AiQuestionCheckbox_AnswersSchema.array().optional().nullable(),
  has: AiQuestionCheckbox_AnswersSchema.optional().nullable(),
  hasEvery: AiQuestionCheckbox_AnswersSchema.array().optional(),
  hasSome: AiQuestionCheckbox_AnswersSchema.array().optional(),
  isEmpty: z.boolean().optional()
}).strict();
export const EnumAiQuestionCheckbox_AnswersNullableListFilterObjectSchema: z.ZodType<Prisma.EnumAiQuestionCheckbox_AnswersNullableListFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAiQuestionCheckbox_AnswersNullableListFilter>;
export const EnumAiQuestionCheckbox_AnswersNullableListFilterObjectZodSchema = makeSchema();
