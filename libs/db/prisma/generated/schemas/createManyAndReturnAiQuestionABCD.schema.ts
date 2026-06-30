import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDSelectObjectSchema as AiQuestionABCDSelectObjectSchema } from './objects/AiQuestionABCDSelect.schema';
import { AiQuestionABCDCreateManyInputObjectSchema as AiQuestionABCDCreateManyInputObjectSchema } from './objects/AiQuestionABCDCreateManyInput.schema';

export const AiQuestionABCDCreateManyAndReturnSchema: z.ZodType<Prisma.AiQuestionABCDCreateManyAndReturnArgs> = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), data: z.union([ AiQuestionABCDCreateManyInputObjectSchema, z.array(AiQuestionABCDCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDCreateManyAndReturnArgs>;

export const AiQuestionABCDCreateManyAndReturnZodSchema = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), data: z.union([ AiQuestionABCDCreateManyInputObjectSchema, z.array(AiQuestionABCDCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();