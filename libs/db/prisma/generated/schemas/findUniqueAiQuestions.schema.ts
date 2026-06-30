import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsSelectObjectSchema as AiQuestionsSelectObjectSchema } from './objects/AiQuestionsSelect.schema';
import { AiQuestionsIncludeObjectSchema as AiQuestionsIncludeObjectSchema } from './objects/AiQuestionsInclude.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './objects/AiQuestionsWhereUniqueInput.schema';

export const AiQuestionsFindUniqueSchema: z.ZodType<Prisma.AiQuestionsFindUniqueArgs> = z.object({ select: AiQuestionsSelectObjectSchema.optional(), include: AiQuestionsIncludeObjectSchema.optional(), where: AiQuestionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionsFindUniqueArgs>;

export const AiQuestionsFindUniqueZodSchema = z.object({ select: AiQuestionsSelectObjectSchema.optional(), include: AiQuestionsIncludeObjectSchema.optional(), where: AiQuestionsWhereUniqueInputObjectSchema }).strict();