import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxSelectObjectSchema as AiQuestionCheckboxSelectObjectSchema } from './objects/AiQuestionCheckboxSelect.schema';
import { AiQuestionCheckboxCreateManyInputObjectSchema as AiQuestionCheckboxCreateManyInputObjectSchema } from './objects/AiQuestionCheckboxCreateManyInput.schema';

export const AiQuestionCheckboxCreateManyAndReturnSchema: z.ZodType<Prisma.AiQuestionCheckboxCreateManyAndReturnArgs> = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), data: z.union([ AiQuestionCheckboxCreateManyInputObjectSchema, z.array(AiQuestionCheckboxCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxCreateManyAndReturnArgs>;

export const AiQuestionCheckboxCreateManyAndReturnZodSchema = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), data: z.union([ AiQuestionCheckboxCreateManyInputObjectSchema, z.array(AiQuestionCheckboxCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();