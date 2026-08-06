import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuidStepStatusSchema } from '../enums/GuidStepStatus.schema';
import { NestedEnumGuidStepStatusFilterObjectSchema as NestedEnumGuidStepStatusFilterObjectSchema } from './NestedEnumGuidStepStatusFilter.schema'

const makeSchema = () => z.object({
  equals: GuidStepStatusSchema.optional(),
  in: GuidStepStatusSchema.array().optional(),
  notIn: GuidStepStatusSchema.array().optional(),
  not: z.union([GuidStepStatusSchema, z.lazy(() => NestedEnumGuidStepStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumGuidStepStatusFilterObjectSchema: z.ZodType<Prisma.EnumGuidStepStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumGuidStepStatusFilter>;
export const EnumGuidStepStatusFilterObjectZodSchema = makeSchema();
