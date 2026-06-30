import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionRangeSelectObjectSchema as AiQuestionRangeSelectObjectSchema } from './objects/AiQuestionRangeSelect.schema';
import { AiQuestionRangeIncludeObjectSchema as AiQuestionRangeIncludeObjectSchema } from './objects/AiQuestionRangeInclude.schema';
import { AiQuestionRangeWhereUniqueInputObjectSchema as AiQuestionRangeWhereUniqueInputObjectSchema } from './objects/AiQuestionRangeWhereUniqueInput.schema';

export const AiQuestionRangeDeleteOneSchema: z.ZodType<Prisma.AiQuestionRangeDeleteArgs> = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), include: AiQuestionRangeIncludeObjectSchema.optional(), where: AiQuestionRangeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeDeleteArgs>;

export const AiQuestionRangeDeleteOneZodSchema = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), include: AiQuestionRangeIncludeObjectSchema.optional(), where: AiQuestionRangeWhereUniqueInputObjectSchema }).strict();