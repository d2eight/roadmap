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
  questions: SortOrderSchema.optional(),
  answeredQuestions: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  progressStatus: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GuideCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GuideCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCountOrderByAggregateInput>;
export const GuideCountOrderByAggregateInputObjectZodSchema = makeSchema();
