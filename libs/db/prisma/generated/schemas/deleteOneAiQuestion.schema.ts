import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionSelectObjectSchema as AiQuestionSelectObjectSchema } from './objects/AiQuestionSelect.schema';
import { AiQuestionIncludeObjectSchema as AiQuestionIncludeObjectSchema } from './objects/AiQuestionInclude.schema';
import { AiQuestionWhereUniqueInputObjectSchema as AiQuestionWhereUniqueInputObjectSchema } from './objects/AiQuestionWhereUniqueInput.schema';

export const AiQuestionDeleteOneSchema: z.ZodType<Prisma.AiQuestionDeleteArgs> = z.object({ select: AiQuestionSelectObjectSchema.optional(), include: AiQuestionIncludeObjectSchema.optional(), where: AiQuestionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionDeleteArgs>;

export const AiQuestionDeleteOneZodSchema = z.object({ select: AiQuestionSelectObjectSchema.optional(), include: AiQuestionIncludeObjectSchema.optional(), where: AiQuestionWhereUniqueInputObjectSchema }).strict();