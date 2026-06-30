import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AiQuestionCountOrderByAggregateInputObjectSchema as AiQuestionCountOrderByAggregateInputObjectSchema } from './AiQuestionCountOrderByAggregateInput.schema';
import { AiQuestionMaxOrderByAggregateInputObjectSchema as AiQuestionMaxOrderByAggregateInputObjectSchema } from './AiQuestionMaxOrderByAggregateInput.schema';
import { AiQuestionMinOrderByAggregateInputObjectSchema as AiQuestionMinOrderByAggregateInputObjectSchema } from './AiQuestionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  answer: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AiQuestionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AiQuestionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AiQuestionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AiQuestionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AiQuestionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionOrderByWithAggregationInput>;
export const AiQuestionOrderByWithAggregationInputObjectZodSchema = makeSchema();
