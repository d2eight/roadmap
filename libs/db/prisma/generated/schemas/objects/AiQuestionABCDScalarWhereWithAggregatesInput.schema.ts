import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumAiQuestionABCD_AnswersNullableWithAggregatesFilterObjectSchema as EnumAiQuestionABCD_AnswersNullableWithAggregatesFilterObjectSchema } from './EnumAiQuestionABCD_AnswersNullableWithAggregatesFilter.schema';
import { AiQuestionABCD_AnswersSchema } from '../enums/AiQuestionABCD_Answers.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const aiquestionabcdscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AiQuestionABCDScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiQuestionABCDScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiQuestionABCDScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiQuestionABCDScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiQuestionABCDScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  question: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  aiQuestionsId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  A: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  B: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  C: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  D: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  answer: z.union([z.lazy(() => EnumAiQuestionABCD_AnswersNullableWithAggregatesFilterObjectSchema), AiQuestionABCD_AnswersSchema]).optional().nullable(),
  customAnswer: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const AiQuestionABCDScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDScalarWhereWithAggregatesInput> = aiquestionabcdscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AiQuestionABCDScalarWhereWithAggregatesInput>;
export const AiQuestionABCDScalarWhereWithAggregatesInputObjectZodSchema = aiquestionabcdscalarwherewithaggregatesinputSchema;
