import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDCreateManyInputObjectSchema as AiQuestionABCDCreateManyInputObjectSchema } from './objects/AiQuestionABCDCreateManyInput.schema';

export const AiQuestionABCDCreateManySchema: z.ZodType<Prisma.AiQuestionABCDCreateManyArgs> = z.object({ data: z.union([ AiQuestionABCDCreateManyInputObjectSchema, z.array(AiQuestionABCDCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDCreateManyArgs>;

export const AiQuestionABCDCreateManyZodSchema = z.object({ data: z.union([ AiQuestionABCDCreateManyInputObjectSchema, z.array(AiQuestionABCDCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();