import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDWhereInputObjectSchema as AiQuestionABCDWhereInputObjectSchema } from './objects/AiQuestionABCDWhereInput.schema';

export const AiQuestionABCDDeleteManySchema: z.ZodType<Prisma.AiQuestionABCDDeleteManyArgs> = z.object({ where: AiQuestionABCDWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDDeleteManyArgs>;

export const AiQuestionABCDDeleteManyZodSchema = z.object({ where: AiQuestionABCDWhereInputObjectSchema.optional() }).strict();