import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const GuideOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.GuideOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideOrderByRelationAggregateInput>;
export const GuideOrderByRelationAggregateInputObjectZodSchema = makeSchema();
