import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumAiQuestionCheckbox_AnswersNullableListFilterObjectSchema as EnumAiQuestionCheckbox_AnswersNullableListFilterObjectSchema } from './EnumAiQuestionCheckbox_AnswersNullableListFilter.schema'

const aiquestioncheckboxscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AiQuestionCheckboxScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiQuestionCheckboxScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiQuestionCheckboxScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiQuestionCheckboxScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiQuestionCheckboxScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  question: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  aiQuestionsId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  A: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  B: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  C: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  D: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  E: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  F: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  answer: z.lazy(() => EnumAiQuestionCheckbox_AnswersNullableListFilterObjectSchema).optional()
}).strict();
export const AiQuestionCheckboxScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxScalarWhereWithAggregatesInput> = aiquestioncheckboxscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AiQuestionCheckboxScalarWhereWithAggregatesInput>;
export const AiQuestionCheckboxScalarWhereWithAggregatesInputObjectZodSchema = aiquestioncheckboxscalarwherewithaggregatesinputSchema;
