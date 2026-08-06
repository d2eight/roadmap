import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuidStepStatusSchema } from '../enums/GuidStepStatus.schema';
import { NestedEnumGuidStepStatusWithAggregatesFilterObjectSchema as NestedEnumGuidStepStatusWithAggregatesFilterObjectSchema } from './NestedEnumGuidStepStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGuidStepStatusFilterObjectSchema as NestedEnumGuidStepStatusFilterObjectSchema } from './NestedEnumGuidStepStatusFilter.schema'

const makeSchema = () => z.object({
  equals: GuidStepStatusSchema.optional(),
  in: GuidStepStatusSchema.array().optional(),
  notIn: GuidStepStatusSchema.array().optional(),
  not: z.union([GuidStepStatusSchema, z.lazy(() => NestedEnumGuidStepStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGuidStepStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGuidStepStatusFilterObjectSchema).optional()
}).strict();
export const EnumGuidStepStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumGuidStepStatusWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumGuidStepStatusWithAggregatesFilter>;
export const EnumGuidStepStatusWithAggregatesFilterObjectZodSchema = makeSchema();
