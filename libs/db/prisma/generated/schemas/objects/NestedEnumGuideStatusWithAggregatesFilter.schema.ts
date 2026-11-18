import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGuideStatusFilterObjectSchema as NestedEnumGuideStatusFilterObjectSchema } from './NestedEnumGuideStatusFilter.schema'

const nestedenumguidestatuswithaggregatesfilterSchema = z.object({
  equals: GuideStatusSchema.optional(),
  in: GuideStatusSchema.array().optional(),
  notIn: GuideStatusSchema.array().optional(),
  not: z.union([GuideStatusSchema, z.lazy(() => NestedEnumGuideStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGuideStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGuideStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumGuideStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumGuideStatusWithAggregatesFilter> = nestedenumguidestatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumGuideStatusWithAggregatesFilter>;
export const NestedEnumGuideStatusWithAggregatesFilterObjectZodSchema = nestedenumguidestatuswithaggregatesfilterSchema;
