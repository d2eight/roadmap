import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './objects/AiQuestionsWhereInput.schema';

export const AiQuestionsDeleteManySchema: z.ZodType<Prisma.AiQuestionsDeleteManyArgs> = z.object({ where: AiQuestionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionsDeleteManyArgs>;

export const AiQuestionsDeleteManyZodSchema = z.object({ where: AiQuestionsWhereInputObjectSchema.optional() }).strict();