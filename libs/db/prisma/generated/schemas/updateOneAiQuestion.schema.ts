import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionSelectObjectSchema as AiQuestionSelectObjectSchema } from './objects/AiQuestionSelect.schema';
import { AiQuestionIncludeObjectSchema as AiQuestionIncludeObjectSchema } from './objects/AiQuestionInclude.schema';
import { AiQuestionUpdateInputObjectSchema as AiQuestionUpdateInputObjectSchema } from './objects/AiQuestionUpdateInput.schema';
import { AiQuestionUncheckedUpdateInputObjectSchema as AiQuestionUncheckedUpdateInputObjectSchema } from './objects/AiQuestionUncheckedUpdateInput.schema';
import { AiQuestionWhereUniqueInputObjectSchema as AiQuestionWhereUniqueInputObjectSchema } from './objects/AiQuestionWhereUniqueInput.schema';

export const AiQuestionUpdateOneSchema: z.ZodType<Prisma.AiQuestionUpdateArgs> = z.object({ select: AiQuestionSelectObjectSchema.optional(), include: AiQuestionIncludeObjectSchema.optional(), data: z.union([AiQuestionUpdateInputObjectSchema, AiQuestionUncheckedUpdateInputObjectSchema]), where: AiQuestionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionUpdateArgs>;

export const AiQuestionUpdateOneZodSchema = z.object({ select: AiQuestionSelectObjectSchema.optional(), include: AiQuestionIncludeObjectSchema.optional(), data: z.union([AiQuestionUpdateInputObjectSchema, AiQuestionUncheckedUpdateInputObjectSchema]), where: AiQuestionWhereUniqueInputObjectSchema }).strict();