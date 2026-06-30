import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AiQuestionRangeCountOrderByAggregateInputObjectSchema as AiQuestionRangeCountOrderByAggregateInputObjectSchema } from './AiQuestionRangeCountOrderByAggregateInput.schema';
import { AiQuestionRangeAvgOrderByAggregateInputObjectSchema as AiQuestionRangeAvgOrderByAggregateInputObjectSchema } from './AiQuestionRangeAvgOrderByAggregateInput.schema';
import { AiQuestionRangeMaxOrderByAggregateInputObjectSchema as AiQuestionRangeMaxOrderByAggregateInputObjectSchema } from './AiQuestionRangeMaxOrderByAggregateInput.schema';
import { AiQuestionRangeMinOrderByAggregateInputObjectSchema as AiQuestionRangeMinOrderByAggregateInputObjectSchema } from './AiQuestionRangeMinOrderByAggregateInput.schema';
import { AiQuestionRangeSumOrderByAggregateInputObjectSchema as AiQuestionRangeSumOrderByAggregateInputObjectSchema } from './AiQuestionRangeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  answer: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => AiQuestionRangeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AiQuestionRangeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AiQuestionRangeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AiQuestionRangeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AiQuestionRangeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AiQuestionRangeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeOrderByWithAggregationInput>;
export const AiQuestionRangeOrderByWithAggregationInputObjectZodSchema = makeSchema();
