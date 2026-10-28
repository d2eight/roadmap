import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideProgressStatusSchema } from '../enums/GuideProgressStatus.schema';
import { NestedEnumGuideProgressStatusFilterObjectSchema as NestedEnumGuideProgressStatusFilterObjectSchema } from './NestedEnumGuideProgressStatusFilter.schema'

const makeSchema = () => z.object({
  equals: GuideProgressStatusSchema.optional(),
  in: GuideProgressStatusSchema.array().optional(),
  notIn: GuideProgressStatusSchema.array().optional(),
  not: z.union([GuideProgressStatusSchema, z.lazy(() => NestedEnumGuideProgressStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumGuideProgressStatusFilterObjectSchema: z.ZodType<Prisma.EnumGuideProgressStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumGuideProgressStatusFilter>;
export const EnumGuideProgressStatusFilterObjectZodSchema = makeSchema();
