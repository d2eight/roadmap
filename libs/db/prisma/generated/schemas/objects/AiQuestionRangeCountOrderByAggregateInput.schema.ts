import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  answer: SortOrderSchema.optional()
}).strict();
export const AiQuestionRangeCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeCountOrderByAggregateInput>;
export const AiQuestionRangeCountOrderByAggregateInputObjectZodSchema = makeSchema();
