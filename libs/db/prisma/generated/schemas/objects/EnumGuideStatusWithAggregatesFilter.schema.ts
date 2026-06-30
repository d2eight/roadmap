import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { NestedEnumGuideStatusWithAggregatesFilterObjectSchema as NestedEnumGuideStatusWithAggregatesFilterObjectSchema } from './NestedEnumGuideStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGuideStatusFilterObjectSchema as NestedEnumGuideStatusFilterObjectSchema } from './NestedEnumGuideStatusFilter.schema'

const makeSchema = () => z.object({
  equals: GuideStatusSchema.optional(),
  in: GuideStatusSchema.array().optional(),
  notIn: GuideStatusSchema.array().optional(),
  not: z.union([GuideStatusSchema, z.lazy(() => NestedEnumGuideStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGuideStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGuideStatusFilterObjectSchema).optional()
}).strict();
export const EnumGuideStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumGuideStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumGuideStatusWithAggregatesFilter>;
export const EnumGuideStatusWithAggregatesFilterObjectZodSchema = makeSchema();
