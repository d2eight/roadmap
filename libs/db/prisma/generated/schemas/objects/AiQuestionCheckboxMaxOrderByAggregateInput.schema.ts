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
  E: SortOrderSchema.optional(),
  F: SortOrderSchema.optional()
}).strict();
export const AiQuestionCheckboxMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxMaxOrderByAggregateInput>;
export const AiQuestionCheckboxMaxOrderByAggregateInputObjectZodSchema = makeSchema();
