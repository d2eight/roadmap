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
export const AiQuestionRangeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeMaxOrderByAggregateInput>;
export const AiQuestionRangeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
