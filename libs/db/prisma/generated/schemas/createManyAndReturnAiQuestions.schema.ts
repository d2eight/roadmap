import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsSelectObjectSchema as AiQuestionsSelectObjectSchema } from './objects/AiQuestionsSelect.schema';
import { AiQuestionsCreateManyInputObjectSchema as AiQuestionsCreateManyInputObjectSchema } from './objects/AiQuestionsCreateManyInput.schema';

export const AiQuestionsCreateManyAndReturnSchema: z.ZodType<Prisma.AiQuestionsCreateManyAndReturnArgs> = z.object({ select: AiQuestionsSelectObjectSchema.optional(), data: z.union([ AiQuestionsCreateManyInputObjectSchema, z.array(AiQuestionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionsCreateManyAndReturnArgs>;

export const AiQuestionsCreateManyAndReturnZodSchema = z.object({ select: AiQuestionsSelectObjectSchema.optional(), data: z.union([ AiQuestionsCreateManyInputObjectSchema, z.array(AiQuestionsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();