import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuidStepStatusSchema } from '../enums/GuidStepStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGuidStepStatusFilterObjectSchema as NestedEnumGuidStepStatusFilterObjectSchema } from './NestedEnumGuidStepStatusFilter.schema'

const nestedenumguidstepstatuswithaggregatesfilterSchema = z.object({
  equals: GuidStepStatusSchema.optional(),
  in: GuidStepStatusSchema.array().optional(),
  notIn: GuidStepStatusSchema.array().optional(),
  not: z.union([GuidStepStatusSchema, z.lazy(() => NestedEnumGuidStepStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGuidStepStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGuidStepStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumGuidStepStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumGuidStepStatusWithAggregatesFilter> = nestedenumguidstepstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumGuidStepStatusWithAggregatesFilter>;
export const NestedEnumGuidStepStatusWithAggregatesFilterObjectZodSchema = nestedenumguidstepstatuswithaggregatesfilterSchema;
