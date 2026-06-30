import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AiQuestionABCDCountOrderByAggregateInputObjectSchema as AiQuestionABCDCountOrderByAggregateInputObjectSchema } from './AiQuestionABCDCountOrderByAggregateInput.schema';
import { AiQuestionABCDMaxOrderByAggregateInputObjectSchema as AiQuestionABCDMaxOrderByAggregateInputObjectSchema } from './AiQuestionABCDMaxOrderByAggregateInput.schema';
import { AiQuestionABCDMinOrderByAggregateInputObjectSchema as AiQuestionABCDMinOrderByAggregateInputObjectSchema } from './AiQuestionABCDMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  A: SortOrderSchema.optional(),
  B: SortOrderSchema.optional(),
  C: SortOrderSchema.optional(),
  D: SortOrderSchema.optional(),
  answer: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  customAnswer: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AiQuestionABCDCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AiQuestionABCDMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AiQuestionABCDMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AiQuestionABCDOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDOrderByWithAggregationInput>;
export const AiQuestionABCDOrderByWithAggregationInputObjectZodSchema = makeSchema();
