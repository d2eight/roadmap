import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionRangeWhereInputObjectSchema as AiQuestionRangeWhereInputObjectSchema } from './objects/AiQuestionRangeWhereInput.schema';

export const AiQuestionRangeDeleteManySchema: z.ZodType<Prisma.AiQuestionRangeDeleteManyArgs> = z.object({ where: AiQuestionRangeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeDeleteManyArgs>;

export const AiQuestionRangeDeleteManyZodSchema = z.object({ where: AiQuestionRangeWhereInputObjectSchema.optional() }).strict();