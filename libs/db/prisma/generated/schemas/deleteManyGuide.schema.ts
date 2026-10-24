import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './objects/GuideWhereInput.schema';

export const GuideDeleteManySchema: z.ZodType<Prisma.GuideDeleteManyArgs> = z
    .object({ where: GuideWhereInputObjectSchema.optional() })
    .strict() as unknown as z.ZodType<Prisma.GuideDeleteManyArgs>;

export const GuideDeleteManyZodSchema = z
    .object({ where: GuideWhereInputObjectSchema.optional() })
    .strict();
