import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  A: SortOrderSchema.optional(),
  B: SortOrderSchema.optional(),
  C: SortOrderSchema.optional(),
  D: SortOrderSchema.optional(),
  answer: SortOrderSchema.optional(),
  customAnswer: SortOrderSchema.optional()
}).strict();
export const AiQuestionABCDMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDMinOrderByAggregateInput>;
export const AiQuestionABCDMinOrderByAggregateInputObjectZodSchema = makeSchema();
