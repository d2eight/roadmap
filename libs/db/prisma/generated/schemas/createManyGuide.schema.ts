import type { Prisma } from '../../../generated/prisma/browser';
import * as z from 'zod';
import { GuideCreateManyInputObjectSchema as GuideCreateManyInputObjectSchema } from './objects/GuideCreateManyInput.schema';

export const GuideCreateManySchema: z.ZodType<Prisma.GuideCreateManyArgs> = z.object({ data: z.union([ GuideCreateManyInputObjectSchema, z.array(GuideCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GuideCreateManyArgs>;

export const GuideCreateManyZodSchema = z.object({ data: z.union([ GuideCreateManyInputObjectSchema, z.array(GuideCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();