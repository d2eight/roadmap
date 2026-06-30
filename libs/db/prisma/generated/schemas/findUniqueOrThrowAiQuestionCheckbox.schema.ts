import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxSelectObjectSchema as AiQuestionCheckboxSelectObjectSchema } from './objects/AiQuestionCheckboxSelect.schema';
import { AiQuestionCheckboxIncludeObjectSchema as AiQuestionCheckboxIncludeObjectSchema } from './objects/AiQuestionCheckboxInclude.schema';
import { AiQuestionCheckboxWhereUniqueInputObjectSchema as AiQuestionCheckboxWhereUniqueInputObjectSchema } from './objects/AiQuestionCheckboxWhereUniqueInput.schema';

export const AiQuestionCheckboxFindUniqueOrThrowSchema: z.ZodType<Prisma.AiQuestionCheckboxFindUniqueOrThrowArgs> = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), include: AiQuestionCheckboxIncludeObjectSchema.optional(), where: AiQuestionCheckboxWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxFindUniqueOrThrowArgs>;

export const AiQuestionCheckboxFindUniqueOrThrowZodSchema = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), include: AiQuestionCheckboxIncludeObjectSchema.optional(), where: AiQuestionCheckboxWhereUniqueInputObjectSchema }).strict();