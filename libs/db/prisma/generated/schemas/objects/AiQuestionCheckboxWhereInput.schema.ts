import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumAiQuestionCheckbox_AnswersNullableListFilterObjectSchema as EnumAiQuestionCheckbox_AnswersNullableListFilterObjectSchema } from './EnumAiQuestionCheckbox_AnswersNullableListFilter.schema';
import { AiQuestionsScalarRelationFilterObjectSchema as AiQuestionsScalarRelationFilterObjectSchema } from './AiQuestionsScalarRelationFilter.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './AiQuestionsWhereInput.schema'

const aiquestioncheckboxwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema), z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema), z.lazy(() => AiQuestionCheckboxWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  question: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  aiQuestionsId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  A: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  B: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  C: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  D: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  E: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  F: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  answer: z.lazy(() => EnumAiQuestionCheckbox_AnswersNullableListFilterObjectSchema).optional(),
  aiQuestions: z.union([z.lazy(() => AiQuestionsScalarRelationFilterObjectSchema), z.lazy(() => AiQuestionsWhereInputObjectSchema)]).optional()
}).strict();
export const AiQuestionCheckboxWhereInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxWhereInput> = aiquestioncheckboxwhereinputSchema as unknown as z.ZodType<Prisma.AiQuestionCheckboxWhereInput>;
export const AiQuestionCheckboxWhereInputObjectZodSchema = aiquestioncheckboxwhereinputSchema;
