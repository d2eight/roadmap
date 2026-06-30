import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  answer: SortOrderSchema.optional()
}).strict();
export const AiQuestionMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionMinOrderByAggregateInput>;
export const AiQuestionMinOrderByAggregateInputObjectZodSchema = makeSchema();
