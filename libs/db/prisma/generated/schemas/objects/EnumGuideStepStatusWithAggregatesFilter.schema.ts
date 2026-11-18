import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema';
import { NestedEnumGuideStepStatusWithAggregatesFilterObjectSchema as NestedEnumGuideStepStatusWithAggregatesFilterObjectSchema } from './NestedEnumGuideStepStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGuideStepStatusFilterObjectSchema as NestedEnumGuideStepStatusFilterObjectSchema } from './NestedEnumGuideStepStatusFilter.schema'

const makeSchema = () => z.object({
  equals: GuideStepStatusSchema.optional(),
  in: GuideStepStatusSchema.array().optional(),
  notIn: GuideStepStatusSchema.array().optional(),
  not: z.union([GuideStepStatusSchema, z.lazy(() => NestedEnumGuideStepStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGuideStepStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGuideStepStatusFilterObjectSchema).optional()
}).strict();
export const EnumGuideStepStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumGuideStepStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumGuideStepStatusWithAggregatesFilter>;
export const EnumGuideStepStatusWithAggregatesFilterObjectZodSchema = makeSchema();
