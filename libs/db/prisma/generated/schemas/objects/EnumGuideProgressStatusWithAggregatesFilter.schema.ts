import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideProgressStatusSchema } from '../enums/GuideProgressStatus.schema';
import { NestedEnumGuideProgressStatusWithAggregatesFilterObjectSchema as NestedEnumGuideProgressStatusWithAggregatesFilterObjectSchema } from './NestedEnumGuideProgressStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumGuideProgressStatusFilterObjectSchema as NestedEnumGuideProgressStatusFilterObjectSchema } from './NestedEnumGuideProgressStatusFilter.schema';

const makeSchema = () =>
    z
        .object({
            equals: GuideProgressStatusSchema.optional(),
            in: GuideProgressStatusSchema.array().optional(),
            notIn: GuideProgressStatusSchema.array().optional(),
            not: z
                .union([
                    GuideProgressStatusSchema,
                    z.lazy(
                        () =>
                            NestedEnumGuideProgressStatusWithAggregatesFilterObjectSchema,
                    ),
                ])
                .optional(),
            _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
            _min: z
                .lazy(() => NestedEnumGuideProgressStatusFilterObjectSchema)
                .optional(),
            _max: z
                .lazy(() => NestedEnumGuideProgressStatusFilterObjectSchema)
                .optional(),
        })
        .strict();
export const EnumGuideProgressStatusWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumGuideProgressStatusWithAggregatesFilter> =
    makeSchema() as unknown as z.ZodType<Prisma.EnumGuideProgressStatusWithAggregatesFilter>;
export const EnumGuideProgressStatusWithAggregatesFilterObjectZodSchema =
    makeSchema();
