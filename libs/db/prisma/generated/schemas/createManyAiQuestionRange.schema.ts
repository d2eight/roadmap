import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionRangeCreateManyInputObjectSchema as AiQuestionRangeCreateManyInputObjectSchema } from './objects/AiQuestionRangeCreateManyInput.schema';

export const AiQuestionRangeCreateManySchema: z.ZodType<Prisma.AiQuestionRangeCreateManyArgs> = z.object({ data: z.union([ AiQuestionRangeCreateManyInputObjectSchema, z.array(AiQuestionRangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeCreateManyArgs>;

export const AiQuestionRangeCreateManyZodSchema = z.object({ data: z.union([ AiQuestionRangeCreateManyInputObjectSchema, z.array(AiQuestionRangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();