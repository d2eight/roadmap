import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GuideCountOrderByAggregateInputObjectSchema as GuideCountOrderByAggregateInputObjectSchema } from './GuideCountOrderByAggregateInput.schema';
import { GuideMaxOrderByAggregateInputObjectSchema as GuideMaxOrderByAggregateInputObjectSchema } from './GuideMaxOrderByAggregateInput.schema';
import { GuideMinOrderByAggregateInputObjectSchema as GuideMinOrderByAggregateInputObjectSchema } from './GuideMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  prompt: SortOrderSchema.optional(),
  externalAiQuestionsStatus: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  questions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  answeredQuestions: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  progressStatus: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => GuideCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GuideMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GuideMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GuideOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GuideOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideOrderByWithAggregationInput>;
export const GuideOrderByWithAggregationInputObjectZodSchema = makeSchema();
