import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  answer: SortOrderSchema.optional()
}).strict();
export const AiQuestionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCountOrderByAggregateInput>;
export const AiQuestionCountOrderByAggregateInputObjectZodSchema = makeSchema();
