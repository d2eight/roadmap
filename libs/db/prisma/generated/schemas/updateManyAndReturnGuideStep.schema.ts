import type { Prisma } from '../../../generated/prisma/browser';
import * as z from 'zod';
import { GuideStepSelectObjectSchema as GuideStepSelectObjectSchema } from './objects/GuideStepSelect.schema';
import { GuideStepUpdateManyMutationInputObjectSchema as GuideStepUpdateManyMutationInputObjectSchema } from './objects/GuideStepUpdateManyMutationInput.schema';
import { GuideStepWhereInputObjectSchema as GuideStepWhereInputObjectSchema } from './objects/GuideStepWhereInput.schema';

export const GuideStepUpdateManyAndReturnSchema: z.ZodType<Prisma.GuideStepUpdateManyAndReturnArgs> = z.object({ select: GuideStepSelectObjectSchema.optional(), data: GuideStepUpdateManyMutationInputObjectSchema, where: GuideStepWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GuideStepUpdateManyAndReturnArgs>;

export const GuideStepUpdateManyAndReturnZodSchema = z.object({ select: GuideStepSelectObjectSchema.optional(), data: GuideStepUpdateManyMutationInputObjectSchema, where: GuideStepWhereInputObjectSchema.optional() }).strict();