import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideUpdateManyMutationInputObjectSchema as GuideUpdateManyMutationInputObjectSchema } from './objects/GuideUpdateManyMutationInput.schema';
import { GuideWhereInputObjectSchema as GuideWhereInputObjectSchema } from './objects/GuideWhereInput.schema';

export const GuideUpdateManySchema: z.ZodType<Prisma.GuideUpdateManyArgs> = z.object({ data: GuideUpdateManyMutationInputObjectSchema, where: GuideWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GuideUpdateManyArgs>;

export const GuideUpdateManyZodSchema = z.object({ data: GuideUpdateManyMutationInputObjectSchema, where: GuideWhereInputObjectSchema.optional() }).strict();