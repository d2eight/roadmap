import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionRangeSelectObjectSchema as AiQuestionRangeSelectObjectSchema } from './objects/AiQuestionRangeSelect.schema';
import { AiQuestionRangeIncludeObjectSchema as AiQuestionRangeIncludeObjectSchema } from './objects/AiQuestionRangeInclude.schema';
import { AiQuestionRangeUpdateInputObjectSchema as AiQuestionRangeUpdateInputObjectSchema } from './objects/AiQuestionRangeUpdateInput.schema';
import { AiQuestionRangeUncheckedUpdateInputObjectSchema as AiQuestionRangeUncheckedUpdateInputObjectSchema } from './objects/AiQuestionRangeUncheckedUpdateInput.schema';
import { AiQuestionRangeWhereUniqueInputObjectSchema as AiQuestionRangeWhereUniqueInputObjectSchema } from './objects/AiQuestionRangeWhereUniqueInput.schema';

export const AiQuestionRangeUpdateOneSchema: z.ZodType<Prisma.AiQuestionRangeUpdateArgs> = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), include: AiQuestionRangeIncludeObjectSchema.optional(), data: z.union([AiQuestionRangeUpdateInputObjectSchema, AiQuestionRangeUncheckedUpdateInputObjectSchema]), where: AiQuestionRangeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeUpdateArgs>;

export const AiQuestionRangeUpdateOneZodSchema = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), include: AiQuestionRangeIncludeObjectSchema.optional(), data: z.union([AiQuestionRangeUpdateInputObjectSchema, AiQuestionRangeUncheckedUpdateInputObjectSchema]), where: AiQuestionRangeWhereUniqueInputObjectSchema }).strict();