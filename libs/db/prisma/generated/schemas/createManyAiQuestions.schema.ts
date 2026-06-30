import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsCreateManyInputObjectSchema as AiQuestionsCreateManyInputObjectSchema } from './objects/AiQuestionsCreateManyInput.schema';

export const AiQuestionsCreateManySchema: z.ZodType<Prisma.AiQuestionsCreateManyArgs> = z.object({ data: z.union([ AiQuestionsCreateManyInputObjectSchema, z.array(AiQuestionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionsCreateManyArgs>;

export const AiQuestionsCreateManyZodSchema = z.object({ data: z.union([ AiQuestionsCreateManyInputObjectSchema, z.array(AiQuestionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();