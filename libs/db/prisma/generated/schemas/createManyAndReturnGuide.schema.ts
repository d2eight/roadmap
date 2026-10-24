import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideSelectObjectSchema as GuideSelectObjectSchema } from './objects/GuideSelect.schema';
import { GuideCreateManyInputObjectSchema as GuideCreateManyInputObjectSchema } from './objects/GuideCreateManyInput.schema';

export const GuideCreateManyAndReturnSchema: z.ZodType<Prisma.GuideCreateManyAndReturnArgs> =
    z
        .object({
            select: GuideSelectObjectSchema.optional(),
            data: z.union([
                GuideCreateManyInputObjectSchema,
                z.array(GuideCreateManyInputObjectSchema),
            ]),
            skipDuplicates: z.boolean().optional(),
        })
        .strict() as unknown as z.ZodType<Prisma.GuideCreateManyAndReturnArgs>;

export const GuideCreateManyAndReturnZodSchema = z
    .object({
        select: GuideSelectObjectSchema.optional(),
        data: z.union([
            GuideCreateManyInputObjectSchema,
            z.array(GuideCreateManyInputObjectSchema),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict();
