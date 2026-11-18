import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideProgressStatusSchema } from '../enums/GuideProgressStatus.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGuideProgressStatusFilterObjectSchema as NestedEnumGuideProgressStatusFilterObjectSchema } from './NestedEnumGuideProgressStatusFilter.schema'

const nestedenumguideprogressstatuswithaggregatesfilterSchema = z.object({
  equals: GuideProgressStatusSchema.optional(),
  in: GuideProgressStatusSchema.array().optional(),
  notIn: GuideProgressStatusSchema.array().optional(),
  not: z.union([GuideProgressStatusSchema, z.lazy(() => NestedEnumGuideProgressStatusWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumGuideProgressStatusFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumGuideProgressStatusFilterObjectSchema).optional()
}).strict();
export const NestedEnumGuideProgressStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumGuideProgressStatusWithAggregatesFilter> = nestedenumguideprogressstatuswithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumGuideProgressStatusWithAggregatesFilter>;
export const NestedEnumGuideProgressStatusWithAggregatesFilterObjectZodSchema = nestedenumguideprogressstatuswithaggregatesfilterSchema;
