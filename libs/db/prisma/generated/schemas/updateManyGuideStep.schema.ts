import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideStepUpdateManyMutationInputObjectSchema as GuideStepUpdateManyMutationInputObjectSchema } from './objects/GuideStepUpdateManyMutationInput.schema';
import { GuideStepWhereInputObjectSchema as GuideStepWhereInputObjectSchema } from './objects/GuideStepWhereInput.schema';

export const GuideStepUpdateManySchema: z.ZodType<Prisma.GuideStepUpdateManyArgs> = z.object({ data: GuideStepUpdateManyMutationInputObjectSchema, where: GuideStepWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GuideStepUpdateManyArgs>;

export const GuideStepUpdateManyZodSchema = z.object({ data: GuideStepUpdateManyMutationInputObjectSchema, where: GuideStepWhereInputObjectSchema.optional() }).strict();