import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { NestedEnumGuideStatusFilterObjectSchema as NestedEnumGuideStatusFilterObjectSchema } from './NestedEnumGuideStatusFilter.schema';

const makeSchema = () =>
    z
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
export const EnumGuideStatusFilterObjectSchema: z.ZodType<Prisma.EnumGuideStatusFilter> =
    makeSchema() as unknown as z.ZodType<Prisma.EnumGuideStatusFilter>;
export const EnumGuideStatusFilterObjectZodSchema = makeSchema();
