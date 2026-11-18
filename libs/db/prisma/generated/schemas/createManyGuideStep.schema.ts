import type { Prisma } from '../../../generated/prisma/browser';
import * as z from 'zod';
import { GuideStepCreateManyInputObjectSchema as GuideStepCreateManyInputObjectSchema } from './objects/GuideStepCreateManyInput.schema';

export const GuideStepCreateManySchema: z.ZodType<Prisma.GuideStepCreateManyArgs> = z.object({ data: z.union([ GuideStepCreateManyInputObjectSchema, z.array(GuideStepCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GuideStepCreateManyArgs>;

export const GuideStepCreateManyZodSchema = z.object({ data: z.union([ GuideStepCreateManyInputObjectSchema, z.array(GuideStepCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();