import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema';
import { NestedEnumGuideStepStatusFilterObjectSchema as NestedEnumGuideStepStatusFilterObjectSchema } from './NestedEnumGuideStepStatusFilter.schema';

const makeSchema = () =>
    z
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
export const EnumGuideStepStatusFilterObjectSchema: z.ZodType<Prisma.EnumGuideStepStatusFilter> =
    makeSchema() as unknown as z.ZodType<Prisma.EnumGuideStepStatusFilter>;
export const EnumGuideStepStatusFilterObjectZodSchema = makeSchema();
