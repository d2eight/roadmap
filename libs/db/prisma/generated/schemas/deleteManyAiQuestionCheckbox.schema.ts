import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxWhereInputObjectSchema as AiQuestionCheckboxWhereInputObjectSchema } from './objects/AiQuestionCheckboxWhereInput.schema';

export const AiQuestionCheckboxDeleteManySchema: z.ZodType<Prisma.AiQuestionCheckboxDeleteManyArgs> = z.object({ where: AiQuestionCheckboxWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxDeleteManyArgs>;

export const AiQuestionCheckboxDeleteManyZodSchema = z.object({ where: AiQuestionCheckboxWhereInputObjectSchema.optional() }).strict();