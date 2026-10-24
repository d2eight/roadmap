import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideStepSelectObjectSchema as GuideStepSelectObjectSchema } from './objects/GuideStepSelect.schema';
import { GuideStepIncludeObjectSchema as GuideStepIncludeObjectSchema } from './objects/GuideStepInclude.schema';
import { GuideStepCreateInputObjectSchema as GuideStepCreateInputObjectSchema } from './objects/GuideStepCreateInput.schema';
import { GuideStepUncheckedCreateInputObjectSchema as GuideStepUncheckedCreateInputObjectSchema } from './objects/GuideStepUncheckedCreateInput.schema';

export const GuideStepCreateOneSchema: z.ZodType<Prisma.GuideStepCreateArgs> = z
    .object({
        select: GuideStepSelectObjectSchema.optional(),
        include: GuideStepIncludeObjectSchema.optional(),
        data: z.union([
            GuideStepCreateInputObjectSchema,
            GuideStepUncheckedCreateInputObjectSchema,
        ]),
    })
    .strict() as unknown as z.ZodType<Prisma.GuideStepCreateArgs>;

export const GuideStepCreateOneZodSchema = z
    .object({
        select: GuideStepSelectObjectSchema.optional(),
        include: GuideStepIncludeObjectSchema.optional(),
        data: z.union([
            GuideStepCreateInputObjectSchema,
            GuideStepUncheckedCreateInputObjectSchema,
        ]),
    })
    .strict();
