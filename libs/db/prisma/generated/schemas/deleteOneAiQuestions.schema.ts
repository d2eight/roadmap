import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsSelectObjectSchema as AiQuestionsSelectObjectSchema } from './objects/AiQuestionsSelect.schema';
import { AiQuestionsIncludeObjectSchema as AiQuestionsIncludeObjectSchema } from './objects/AiQuestionsInclude.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './objects/AiQuestionsWhereUniqueInput.schema';

export const AiQuestionsDeleteOneSchema: z.ZodType<Prisma.AiQuestionsDeleteArgs> = z.object({ select: AiQuestionsSelectObjectSchema.optional(), include: AiQuestionsIncludeObjectSchema.optional(), where: AiQuestionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionsDeleteArgs>;

export const AiQuestionsDeleteOneZodSchema = z.object({ select: AiQuestionsSelectObjectSchema.optional(), include: AiQuestionsIncludeObjectSchema.optional(), where: AiQuestionsWhereUniqueInputObjectSchema }).strict();