import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideSelectObjectSchema as GuideSelectObjectSchema } from './objects/GuideSelect.schema';
import { GuideIncludeObjectSchema as GuideIncludeObjectSchema } from './objects/GuideInclude.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './objects/GuideWhereUniqueInput.schema';

export const GuideDeleteOneSchema: z.ZodType<Prisma.GuideDeleteArgs> = z
    .object({
        select: GuideSelectObjectSchema.optional(),
        include: GuideIncludeObjectSchema.optional(),
        where: GuideWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.GuideDeleteArgs>;

export const GuideDeleteOneZodSchema = z
    .object({
        select: GuideSelectObjectSchema.optional(),
        include: GuideIncludeObjectSchema.optional(),
        where: GuideWhereUniqueInputObjectSchema,
    })
    .strict();
