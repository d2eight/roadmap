import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { GuideStepSelectObjectSchema as GuideStepSelectObjectSchema } from './objects/GuideStepSelect.schema';
import { GuideStepIncludeObjectSchema as GuideStepIncludeObjectSchema } from './objects/GuideStepInclude.schema';
import { GuideStepUpdateInputObjectSchema as GuideStepUpdateInputObjectSchema } from './objects/GuideStepUpdateInput.schema';
import { GuideStepUncheckedUpdateInputObjectSchema as GuideStepUncheckedUpdateInputObjectSchema } from './objects/GuideStepUncheckedUpdateInput.schema';
import { GuideStepWhereUniqueInputObjectSchema as GuideStepWhereUniqueInputObjectSchema } from './objects/GuideStepWhereUniqueInput.schema';

export const GuideStepUpdateOneSchema: z.ZodType<Prisma.GuideStepUpdateArgs> = z.object({ select: GuideStepSelectObjectSchema.optional(), include: GuideStepIncludeObjectSchema.optional(), data: z.union([GuideStepUpdateInputObjectSchema, GuideStepUncheckedUpdateInputObjectSchema]), where: GuideStepWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GuideStepUpdateArgs>;

export const GuideStepUpdateOneZodSchema = z.object({ select: GuideStepSelectObjectSchema.optional(), include: GuideStepIncludeObjectSchema.optional(), data: z.union([GuideStepUpdateInputObjectSchema, GuideStepUncheckedUpdateInputObjectSchema]), where: GuideStepWhereUniqueInputObjectSchema }).strict();