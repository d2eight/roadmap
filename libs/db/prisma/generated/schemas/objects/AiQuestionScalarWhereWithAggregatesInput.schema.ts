import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const aiquestionscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AiQuestionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiQuestionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiQuestionScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiQuestionScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiQuestionScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  question: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  aiQuestionsId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  answer: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const AiQuestionScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AiQuestionScalarWhereWithAggregatesInput> = aiquestionscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AiQuestionScalarWhereWithAggregatesInput>;
export const AiQuestionScalarWhereWithAggregatesInputObjectZodSchema = aiquestionscalarwherewithaggregatesinputSchema;
