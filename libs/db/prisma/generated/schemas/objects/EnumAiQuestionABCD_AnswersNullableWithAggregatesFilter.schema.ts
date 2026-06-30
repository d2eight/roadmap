import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCD_AnswersSchema } from '../enums/AiQuestionABCD_Answers.schema';
import { NestedEnumAiQuestionABCD_AnswersNullableWithAggregatesFilterObjectSchema as NestedEnumAiQuestionABCD_AnswersNullableWithAggregatesFilterObjectSchema } from './NestedEnumAiQuestionABCD_AnswersNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumAiQuestionABCD_AnswersNullableFilterObjectSchema as NestedEnumAiQuestionABCD_AnswersNullableFilterObjectSchema } from './NestedEnumAiQuestionABCD_AnswersNullableFilter.schema'

const makeSchema = () => z.object({
  equals: AiQuestionABCD_AnswersSchema.optional().nullable(),
  in: AiQuestionABCD_AnswersSchema.array().optional().nullable(),
  notIn: AiQuestionABCD_AnswersSchema.array().optional().nullable(),
  not: z.union([AiQuestionABCD_AnswersSchema, z.lazy(() => NestedEnumAiQuestionABCD_AnswersNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumAiQuestionABCD_AnswersNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumAiQuestionABCD_AnswersNullableFilterObjectSchema).optional()
}).strict();
export const EnumAiQuestionABCD_AnswersNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumAiQuestionABCD_AnswersNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumAiQuestionABCD_AnswersNullableWithAggregatesFilter>;
export const EnumAiQuestionABCD_AnswersNullableWithAggregatesFilterObjectZodSchema = makeSchema();
