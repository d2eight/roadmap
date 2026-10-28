import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  prompt: SortOrderSchema.optional(),
  externalAiQuestionsStatus: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  progressStatus: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GuideMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GuideMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideMinOrderByAggregateInput>;
export const GuideMinOrderByAggregateInputObjectZodSchema = makeSchema();
