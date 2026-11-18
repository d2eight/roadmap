import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  guideId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GuideStepMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GuideStepMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepMinOrderByAggregateInput>;
export const GuideStepMinOrderByAggregateInputObjectZodSchema = makeSchema();
