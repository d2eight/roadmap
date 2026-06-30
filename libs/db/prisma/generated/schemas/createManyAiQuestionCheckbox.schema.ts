import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxCreateManyInputObjectSchema as AiQuestionCheckboxCreateManyInputObjectSchema } from './objects/AiQuestionCheckboxCreateManyInput.schema';

export const AiQuestionCheckboxCreateManySchema: z.ZodType<Prisma.AiQuestionCheckboxCreateManyArgs> = z.object({ data: z.union([ AiQuestionCheckboxCreateManyInputObjectSchema, z.array(AiQuestionCheckboxCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxCreateManyArgs>;

export const AiQuestionCheckboxCreateManyZodSchema = z.object({ data: z.union([ AiQuestionCheckboxCreateManyInputObjectSchema, z.array(AiQuestionCheckboxCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();