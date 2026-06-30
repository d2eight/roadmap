import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  guideId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const GuideStepMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GuideStepMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepMaxOrderByAggregateInput>;
export const GuideStepMaxOrderByAggregateInputObjectZodSchema = makeSchema();
