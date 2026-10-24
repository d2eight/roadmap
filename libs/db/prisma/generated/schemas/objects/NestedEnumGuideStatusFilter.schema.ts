import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';

const nestedenumguidestatusfilterSchema = z
    .object({
        equals: GuideStatusSchema.optional(),
        in: GuideStatusSchema.array().optional(),
        notIn: GuideStatusSchema.array().optional(),
        not: z
            .union([
                GuideStatusSchema,
                z.lazy(() => NestedEnumGuideStatusFilterObjectSchema),
            ])
            .optional(),
    })
    .strict();
export const NestedEnumGuideStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumGuideStatusFilter> =
    nestedenumguidestatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumGuideStatusFilter>;
export const NestedEnumGuideStatusFilterObjectZodSchema =
    nestedenumguidestatusfilterSchema;
