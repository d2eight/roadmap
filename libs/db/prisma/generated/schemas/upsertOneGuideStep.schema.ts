import type { Prisma } from '../../../generated/prisma/browser';
import * as z from 'zod';
import { GuideStepSelectObjectSchema as GuideStepSelectObjectSchema } from './objects/GuideStepSelect.schema';
import { GuideStepIncludeObjectSchema as GuideStepIncludeObjectSchema } from './objects/GuideStepInclude.schema';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './objects/GuideStepWhereUniqueInput.schema';
import { GuideStepCreateInputObjectSchema as GuideStepCreateInputObjectSchema } from './objects/GuideStepCreateInput.schema';
import { GuideStepUncheckedCreateInputObjectSchema as GuideStepUncheckedCreateInputObjectSchema } from './objects/GuideStepUncheckedCreateInput.schema';
import { GuideStepUpdateInputObjectSchema as GuideStepUpdateInputObjectSchema } from './objects/GuideStepUpdateInput.schema';
import { GuideStepUncheckedUpdateInputObjectSchema as GuideStepUncheckedUpdateInputObjectSchema } from './objects/GuideStepUncheckedUpdateInput.schema';

export const GuideStepUpsertOneSchema: z.ZodType<Prisma.GuideStepUpsertArgs> = z.object({ select: GuideStepSelectObjectSchema.optional(), include: GuideStepIncludeObjectSchema.optional(), where: GuideStepWhereUniqueInputObjectSchema, create: z.union([ GuideStepCreateInputObjectSchema, GuideStepUncheckedCreateInputObjectSchema ]), update: z.union([ GuideStepUpdateInputObjectSchema, GuideStepUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GuideStepUpsertArgs>;

export const GuideStepUpsertOneZodSchema = z.object({ select: GuideStepSelectObjectSchema.optional(), include: GuideStepIncludeObjectSchema.optional(), where: GuideStepWhereUniqueInputObjectSchema, create: z.union([ GuideStepCreateInputObjectSchema, GuideStepUncheckedCreateInputObjectSchema ]), update: z.union([ GuideStepUpdateInputObjectSchema, GuideStepUncheckedUpdateInputObjectSchema ]) }).strict();