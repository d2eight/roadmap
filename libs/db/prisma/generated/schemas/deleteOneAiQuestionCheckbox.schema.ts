import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxSelectObjectSchema as AiQuestionCheckboxSelectObjectSchema } from './objects/AiQuestionCheckboxSelect.schema';
import { AiQuestionCheckboxIncludeObjectSchema as AiQuestionCheckboxIncludeObjectSchema } from './objects/AiQuestionCheckboxInclude.schema';
import { AiQuestionCheckboxWhereUniqueInputObjectSchema as AiQuestionCheckboxWhereUniqueInputObjectSchema } from './objects/AiQuestionCheckboxWhereUniqueInput.schema';

export const AiQuestionCheckboxDeleteOneSchema: z.ZodType<Prisma.AiQuestionCheckboxDeleteArgs> = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), include: AiQuestionCheckboxIncludeObjectSchema.optional(), where: AiQuestionCheckboxWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxDeleteArgs>;

export const AiQuestionCheckboxDeleteOneZodSchema = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), include: AiQuestionCheckboxIncludeObjectSchema.optional(), where: AiQuestionCheckboxWhereUniqueInputObjectSchema }).strict();