import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionWhereInputObjectSchema as AiQuestionWhereInputObjectSchema } from './objects/AiQuestionWhereInput.schema';

export const AiQuestionDeleteManySchema: z.ZodType<Prisma.AiQuestionDeleteManyArgs> = z.object({ where: AiQuestionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionDeleteManyArgs>;

export const AiQuestionDeleteManyZodSchema = z.object({ where: AiQuestionWhereInputObjectSchema.optional() }).strict();