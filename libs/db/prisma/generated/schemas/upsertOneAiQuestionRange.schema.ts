import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionRangeSelectObjectSchema as AiQuestionRangeSelectObjectSchema } from './objects/AiQuestionRangeSelect.schema';
import { AiQuestionRangeIncludeObjectSchema as AiQuestionRangeIncludeObjectSchema } from './objects/AiQuestionRangeInclude.schema';
import { AiQuestionRangeWhereUniqueInputObjectSchema as AiQuestionRangeWhereUniqueInputObjectSchema } from './objects/AiQuestionRangeWhereUniqueInput.schema';
import { AiQuestionRangeCreateInputObjectSchema as AiQuestionRangeCreateInputObjectSchema } from './objects/AiQuestionRangeCreateInput.schema';
import { AiQuestionRangeUncheckedCreateInputObjectSchema as AiQuestionRangeUncheckedCreateInputObjectSchema } from './objects/AiQuestionRangeUncheckedCreateInput.schema';
import { AiQuestionRangeUpdateInputObjectSchema as AiQuestionRangeUpdateInputObjectSchema } from './objects/AiQuestionRangeUpdateInput.schema';
import { AiQuestionRangeUncheckedUpdateInputObjectSchema as AiQuestionRangeUncheckedUpdateInputObjectSchema } from './objects/AiQuestionRangeUncheckedUpdateInput.schema';

export const AiQuestionRangeUpsertOneSchema: z.ZodType<Prisma.AiQuestionRangeUpsertArgs> = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), include: AiQuestionRangeIncludeObjectSchema.optional(), where: AiQuestionRangeWhereUniqueInputObjectSchema, create: z.union([ AiQuestionRangeCreateInputObjectSchema, AiQuestionRangeUncheckedCreateInputObjectSchema ]), update: z.union([ AiQuestionRangeUpdateInputObjectSchema, AiQuestionRangeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeUpsertArgs>;

export const AiQuestionRangeUpsertOneZodSchema = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), include: AiQuestionRangeIncludeObjectSchema.optional(), where: AiQuestionRangeWhereUniqueInputObjectSchema, create: z.union([ AiQuestionRangeCreateInputObjectSchema, AiQuestionRangeUncheckedCreateInputObjectSchema ]), update: z.union([ AiQuestionRangeUpdateInputObjectSchema, AiQuestionRangeUncheckedUpdateInputObjectSchema ]) }).strict();