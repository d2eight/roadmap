import type { Prisma } from '../../../generated/prisma/browser';
import * as z from 'zod';
import { GuideStepWhereInputObjectSchema as GuideStepWhereInputObjectSchema } from './objects/GuideStepWhereInput.schema';

export const GuideStepDeleteManySchema: z.ZodType<Prisma.GuideStepDeleteManyArgs> = z.object({ where: GuideStepWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GuideStepDeleteManyArgs>;

export const GuideStepDeleteManyZodSchema = z.object({ where: GuideStepWhereInputObjectSchema.optional() }).strict();