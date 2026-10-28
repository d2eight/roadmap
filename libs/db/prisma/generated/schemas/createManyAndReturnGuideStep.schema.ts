import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideStepSelectObjectSchema as GuideStepSelectObjectSchema } from './objects/GuideStepSelect.schema';
import { GuideStepCreateManyInputObjectSchema as GuideStepCreateManyInputObjectSchema } from './objects/GuideStepCreateManyInput.schema';

export const GuideStepCreateManyAndReturnSchema: z.ZodType<Prisma.GuideStepCreateManyAndReturnArgs> = z.object({ select: GuideStepSelectObjectSchema.optional(), data: z.union([ GuideStepCreateManyInputObjectSchema, z.array(GuideStepCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GuideStepCreateManyAndReturnArgs>;

export const GuideStepCreateManyAndReturnZodSchema = z.object({ select: GuideStepSelectObjectSchema.optional(), data: z.union([ GuideStepCreateManyInputObjectSchema, z.array(GuideStepCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();