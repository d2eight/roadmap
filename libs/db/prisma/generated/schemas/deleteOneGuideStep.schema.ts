import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideStepSelectObjectSchema as GuideStepSelectObjectSchema } from './objects/GuideStepSelect.schema';
import { GuideStepIncludeObjectSchema as GuideStepIncludeObjectSchema } from './objects/GuideStepInclude.schema';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './objects/GuideStepWhereUniqueInput.schema';

export const GuideStepDeleteOneSchema: z.ZodType<Prisma.GuideStepDeleteArgs> = z
    .object({
        select: GuideStepSelectObjectSchema.optional(),
        include: GuideStepIncludeObjectSchema.optional(),
        where: GuideStepWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.GuideStepDeleteArgs>;

export const GuideStepDeleteOneZodSchema = z
    .object({
        select: GuideStepSelectObjectSchema.optional(),
        include: GuideStepIncludeObjectSchema.optional(),
        where: GuideStepWhereUniqueInputObjectSchema,
    })
    .strict();
