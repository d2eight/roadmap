import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema';

const nestedenumguidestepstatusfilterSchema = z
    .object({
        equals: GuideStepStatusSchema.optional(),
        in: GuideStepStatusSchema.array().optional(),
        notIn: GuideStepStatusSchema.array().optional(),
        not: z
            .union([
                GuideStepStatusSchema,
                z.lazy(() => NestedEnumGuideStepStatusFilterObjectSchema),
            ])
            .optional(),
    })
    .strict();
export const NestedEnumGuideStepStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumGuideStepStatusFilter> =
    nestedenumguidestepstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumGuideStepStatusFilter>;
export const NestedEnumGuideStepStatusFilterObjectZodSchema =
    nestedenumguidestepstatusfilterSchema;
