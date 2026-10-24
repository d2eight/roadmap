import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideSelectObjectSchema as GuideSelectObjectSchema } from './objects/GuideSelect.schema';
import { GuideIncludeObjectSchema as GuideIncludeObjectSchema } from './objects/GuideInclude.schema';
import { GuideUpdateInputObjectSchema as GuideUpdateInputObjectSchema } from './objects/GuideUpdateInput.schema';
import { GuideUncheckedUpdateInputObjectSchema as GuideUncheckedUpdateInputObjectSchema } from './objects/GuideUncheckedUpdateInput.schema';
import { GuideWhereUniqueInputObjectSchema as GuideWhereUniqueInputObjectSchema } from './objects/GuideWhereUniqueInput.schema';

export const GuideUpdateOneSchema: z.ZodType<Prisma.GuideUpdateArgs> = z
    .object({
        select: GuideSelectObjectSchema.optional(),
        include: GuideIncludeObjectSchema.optional(),
        data: z.union([
            GuideUpdateInputObjectSchema,
            GuideUncheckedUpdateInputObjectSchema,
        ]),
        where: GuideWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.GuideUpdateArgs>;

export const GuideUpdateOneZodSchema = z
    .object({
        select: GuideSelectObjectSchema.optional(),
        include: GuideIncludeObjectSchema.optional(),
        data: z.union([
            GuideUpdateInputObjectSchema,
            GuideUncheckedUpdateInputObjectSchema,
        ]),
        where: GuideWhereUniqueInputObjectSchema,
    })
    .strict();
