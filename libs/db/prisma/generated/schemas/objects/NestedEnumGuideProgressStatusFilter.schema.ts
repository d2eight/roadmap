import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideProgressStatusSchema } from '../enums/GuideProgressStatus.schema';

const nestedenumguideprogressstatusfilterSchema = z
    .object({
        equals: GuideProgressStatusSchema.optional(),
        in: GuideProgressStatusSchema.array().optional(),
        notIn: GuideProgressStatusSchema.array().optional(),
        not: z
            .union([
                GuideProgressStatusSchema,
                z.lazy(() => NestedEnumGuideProgressStatusFilterObjectSchema),
            ])
            .optional(),
    })
    .strict();
export const NestedEnumGuideProgressStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumGuideProgressStatusFilter> =
    nestedenumguideprogressstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumGuideProgressStatusFilter>;
export const NestedEnumGuideProgressStatusFilterObjectZodSchema =
    nestedenumguideprogressstatusfilterSchema;
