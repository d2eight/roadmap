import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema'

const aiquestionrangescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AiQuestionRangeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiQuestionRangeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiQuestionRangeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiQuestionRangeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiQuestionRangeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  question: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  aiQuestionsId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  start: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  end: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  answer: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const AiQuestionRangeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeScalarWhereWithAggregatesInput> = aiquestionrangescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AiQuestionRangeScalarWhereWithAggregatesInput>;
export const AiQuestionRangeScalarWhereWithAggregatesInputObjectZodSchema = aiquestionrangescalarwherewithaggregatesinputSchema;
