import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCD_AnswersSchema } from '../enums/AiQuestionABCD_Answers.schema'

const nestedenumaiquestionabcd_answersnullablefilterSchema = z.object({
  equals: AiQuestionABCD_AnswersSchema.optional().nullable(),
  in: AiQuestionABCD_AnswersSchema.array().optional().nullable(),
  notIn: AiQuestionABCD_AnswersSchema.array().optional().nullable(),
  not: z.union([AiQuestionABCD_AnswersSchema, z.lazy(() => NestedEnumAiQuestionABCD_AnswersNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumAiQuestionABCD_AnswersNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumAiQuestionABCD_AnswersNullableFilter> = nestedenumaiquestionabcd_answersnullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumAiQuestionABCD_AnswersNullableFilter>;
export const NestedEnumAiQuestionABCD_AnswersNullableFilterObjectZodSchema = nestedenumaiquestionabcd_answersnullablefilterSchema;
