import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxSelectObjectSchema as AiQuestionCheckboxSelectObjectSchema } from './objects/AiQuestionCheckboxSelect.schema';
import { AiQuestionCheckboxIncludeObjectSchema as AiQuestionCheckboxIncludeObjectSchema } from './objects/AiQuestionCheckboxInclude.schema';
import { AiQuestionCheckboxUpdateInputObjectSchema as AiQuestionCheckboxUpdateInputObjectSchema } from './objects/AiQuestionCheckboxUpdateInput.schema';
import { AiQuestionCheckboxUncheckedUpdateInputObjectSchema as AiQuestionCheckboxUncheckedUpdateInputObjectSchema } from './objects/AiQuestionCheckboxUncheckedUpdateInput.schema';
import { AiQuestionCheckboxWhereUniqueInputObjectSchema as AiQuestionCheckboxWhereUniqueInputObjectSchema } from './objects/AiQuestionCheckboxWhereUniqueInput.schema';

export const AiQuestionCheckboxUpdateOneSchema: z.ZodType<Prisma.AiQuestionCheckboxUpdateArgs> = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), include: AiQuestionCheckboxIncludeObjectSchema.optional(), data: z.union([AiQuestionCheckboxUpdateInputObjectSchema, AiQuestionCheckboxUncheckedUpdateInputObjectSchema]), where: AiQuestionCheckboxWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxUpdateArgs>;

export const AiQuestionCheckboxUpdateOneZodSchema = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), include: AiQuestionCheckboxIncludeObjectSchema.optional(), data: z.union([AiQuestionCheckboxUpdateInputObjectSchema, AiQuestionCheckboxUncheckedUpdateInputObjectSchema]), where: AiQuestionCheckboxWhereUniqueInputObjectSchema }).strict();