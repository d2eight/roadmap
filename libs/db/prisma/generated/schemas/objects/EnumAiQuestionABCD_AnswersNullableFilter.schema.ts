import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCD_AnswersSchema } from '../enums/AiQuestionABCD_Answers.schema';
import { NestedEnumAiQuestionABCD_AnswersNullableFilterObjectSchema as NestedEnumAiQuestionABCD_AnswersNullableFilterObjectSchema } from './NestedEnumAiQuestionABCD_AnswersNullableFilter.schema'

const makeSchema = () => z.object({
  equals: AiQuestionABCD_AnswersSchema.optional().nullable(),
  in: AiQuestionABCD_AnswersSchema.array().optional().nullable(),
  notIn: AiQuestionABCD_AnswersSchema.array().optional().nullable(),
  not: z.union([AiQuestionABCD_AnswersSchema, z.lazy(() => NestedEnumAiQuestionABCD_AnswersNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumAiQuestionABCD_AnswersNullableFilterObjectSchema: z.ZodType<Prisma.EnumAiQuestionABCD_AnswersNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAiQuestionABCD_AnswersNullableFilter>;
export const EnumAiQuestionABCD_AnswersNullableFilterObjectZodSchema = makeSchema();
