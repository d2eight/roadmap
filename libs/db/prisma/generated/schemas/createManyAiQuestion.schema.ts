import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCreateManyInputObjectSchema as AiQuestionCreateManyInputObjectSchema } from './objects/AiQuestionCreateManyInput.schema';

export const AiQuestionCreateManySchema: z.ZodType<Prisma.AiQuestionCreateManyArgs> = z.object({ data: z.union([ AiQuestionCreateManyInputObjectSchema, z.array(AiQuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionCreateManyArgs>;

export const AiQuestionCreateManyZodSchema = z.object({ data: z.union([ AiQuestionCreateManyInputObjectSchema, z.array(AiQuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();