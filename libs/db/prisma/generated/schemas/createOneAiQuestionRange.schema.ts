import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionRangeSelectObjectSchema as AiQuestionRangeSelectObjectSchema } from './objects/AiQuestionRangeSelect.schema';
import { AiQuestionRangeIncludeObjectSchema as AiQuestionRangeIncludeObjectSchema } from './objects/AiQuestionRangeInclude.schema';
import { AiQuestionRangeCreateInputObjectSchema as AiQuestionRangeCreateInputObjectSchema } from './objects/AiQuestionRangeCreateInput.schema';
import { AiQuestionRangeUncheckedCreateInputObjectSchema as AiQuestionRangeUncheckedCreateInputObjectSchema } from './objects/AiQuestionRangeUncheckedCreateInput.schema';

export const AiQuestionRangeCreateOneSchema: z.ZodType<Prisma.AiQuestionRangeCreateArgs> = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), include: AiQuestionRangeIncludeObjectSchema.optional(), data: z.union([AiQuestionRangeCreateInputObjectSchema, AiQuestionRangeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeCreateArgs>;

export const AiQuestionRangeCreateOneZodSchema = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), include: AiQuestionRangeIncludeObjectSchema.optional(), data: z.union([AiQuestionRangeCreateInputObjectSchema, AiQuestionRangeUncheckedCreateInputObjectSchema]) }).strict();