import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AiQuestionCheckboxCountOrderByAggregateInputObjectSchema as AiQuestionCheckboxCountOrderByAggregateInputObjectSchema } from './AiQuestionCheckboxCountOrderByAggregateInput.schema';
import { AiQuestionCheckboxMaxOrderByAggregateInputObjectSchema as AiQuestionCheckboxMaxOrderByAggregateInputObjectSchema } from './AiQuestionCheckboxMaxOrderByAggregateInput.schema';
import { AiQuestionCheckboxMinOrderByAggregateInputObjectSchema as AiQuestionCheckboxMinOrderByAggregateInputObjectSchema } from './AiQuestionCheckboxMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  A: SortOrderSchema.optional(),
  B: SortOrderSchema.optional(),
  C: SortOrderSchema.optional(),
  D: SortOrderSchema.optional(),
  E: SortOrderSchema.optional(),
  F: SortOrderSchema.optional(),
  answer: SortOrderSchema.optional(),
  _count: z.lazy(() => AiQuestionCheckboxCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AiQuestionCheckboxMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AiQuestionCheckboxMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AiQuestionCheckboxOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxOrderByWithAggregationInput>;
export const AiQuestionCheckboxOrderByWithAggregationInputObjectZodSchema = makeSchema();
