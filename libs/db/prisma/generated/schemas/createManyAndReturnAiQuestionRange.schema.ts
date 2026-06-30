import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionRangeSelectObjectSchema as AiQuestionRangeSelectObjectSchema } from './objects/AiQuestionRangeSelect.schema';
import { AiQuestionRangeCreateManyInputObjectSchema as AiQuestionRangeCreateManyInputObjectSchema } from './objects/AiQuestionRangeCreateManyInput.schema';

export const AiQuestionRangeCreateManyAndReturnSchema: z.ZodType<Prisma.AiQuestionRangeCreateManyAndReturnArgs> = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), data: z.union([ AiQuestionRangeCreateManyInputObjectSchema, z.array(AiQuestionRangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeCreateManyAndReturnArgs>;

export const AiQuestionRangeCreateManyAndReturnZodSchema = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), data: z.union([ AiQuestionRangeCreateManyInputObjectSchema, z.array(AiQuestionRangeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();