import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AiQuestionsCountOrderByAggregateInputObjectSchema as AiQuestionsCountOrderByAggregateInputObjectSchema } from './AiQuestionsCountOrderByAggregateInput.schema';
import { AiQuestionsMaxOrderByAggregateInputObjectSchema as AiQuestionsMaxOrderByAggregateInputObjectSchema } from './AiQuestionsMaxOrderByAggregateInput.schema';
import { AiQuestionsMinOrderByAggregateInputObjectSchema as AiQuestionsMinOrderByAggregateInputObjectSchema } from './AiQuestionsMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  guideId: SortOrderSchema.optional(),
  _count: z.lazy(() => AiQuestionsCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AiQuestionsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AiQuestionsMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AiQuestionsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AiQuestionsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsOrderByWithAggregationInput>;
export const AiQuestionsOrderByWithAggregationInputObjectZodSchema = makeSchema();
