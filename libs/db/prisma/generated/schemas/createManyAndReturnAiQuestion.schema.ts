import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionSelectObjectSchema as AiQuestionSelectObjectSchema } from './objects/AiQuestionSelect.schema';
import { AiQuestionCreateManyInputObjectSchema as AiQuestionCreateManyInputObjectSchema } from './objects/AiQuestionCreateManyInput.schema';

export const AiQuestionCreateManyAndReturnSchema: z.ZodType<Prisma.AiQuestionCreateManyAndReturnArgs> = z.object({ select: AiQuestionSelectObjectSchema.optional(), data: z.union([ AiQuestionCreateManyInputObjectSchema, z.array(AiQuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionCreateManyAndReturnArgs>;

export const AiQuestionCreateManyAndReturnZodSchema = z.object({ select: AiQuestionSelectObjectSchema.optional(), data: z.union([ AiQuestionCreateManyInputObjectSchema, z.array(AiQuestionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();