import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuidStepStatusSchema } from '../enums/GuidStepStatus.schema'

const nestedenumguidstepstatusfilterSchema = z.object({
  equals: GuidStepStatusSchema.optional(),
  in: GuidStepStatusSchema.array().optional(),
  notIn: GuidStepStatusSchema.array().optional(),
  not: z.union([GuidStepStatusSchema, z.lazy(() => NestedEnumGuidStepStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumGuidStepStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumGuidStepStatusFilter> = nestedenumguidstepstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumGuidStepStatusFilter>;
export const NestedEnumGuidStepStatusFilterObjectZodSchema = nestedenumguidstepstatusfilterSchema;
