import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumAiQuestionABCD_AnswersNullableFilterObjectSchema as EnumAiQuestionABCD_AnswersNullableFilterObjectSchema } from './EnumAiQuestionABCD_AnswersNullableFilter.schema';
import { AiQuestionABCD_AnswersSchema } from '../enums/AiQuestionABCD_Answers.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { AiQuestionsScalarRelationFilterObjectSchema as AiQuestionsScalarRelationFilterObjectSchema } from './AiQuestionsScalarRelationFilter.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const aiquestionabcdwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AiQuestionABCDWhereInputObjectSchema), z.lazy(() => AiQuestionABCDWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiQuestionABCDWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiQuestionABCDWhereInputObjectSchema), z.lazy(() => AiQuestionABCDWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  question: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  aiQuestionsId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  A: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  B: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  C: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  D: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  answer: z.union([z.lazy(() => EnumAiQuestionABCD_AnswersNullableFilterObjectSchema), AiQuestionABCD_AnswersSchema]).optional().nullable(),
  customAnswer: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  aiQuestions: z.union([z.lazy(() => AiQuestionsScalarRelationFilterObjectSchema), z.lazy(() => AiQuestionsWhereInputObjectSchema)]).optional()
}).strict();
export const AiQuestionABCDWhereInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDWhereInput> = aiquestionabcdwhereinputSchema as unknown as z.ZodType<Prisma.AiQuestionABCDWhereInput>;
export const AiQuestionABCDWhereInputObjectZodSchema = aiquestionabcdwhereinputSchema;
