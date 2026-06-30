import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxSelectObjectSchema as AiQuestionCheckboxSelectObjectSchema } from './objects/AiQuestionCheckboxSelect.schema';
import { AiQuestionCheckboxIncludeObjectSchema as AiQuestionCheckboxIncludeObjectSchema } from './objects/AiQuestionCheckboxInclude.schema';
import { AiQuestionCheckboxWhereUniqueInputObjectSchema as AiQuestionCheckboxWhereUniqueInputObjectSchema } from './objects/AiQuestionCheckboxWhereUniqueInput.schema';
import { AiQuestionCheckboxCreateInputObjectSchema as AiQuestionCheckboxCreateInputObjectSchema } from './objects/AiQuestionCheckboxCreateInput.schema';
import { AiQuestionCheckboxUncheckedCreateInputObjectSchema as AiQuestionCheckboxUncheckedCreateInputObjectSchema } from './objects/AiQuestionCheckboxUncheckedCreateInput.schema';
import { AiQuestionCheckboxUpdateInputObjectSchema as AiQuestionCheckboxUpdateInputObjectSchema } from './objects/AiQuestionCheckboxUpdateInput.schema';
import { AiQuestionCheckboxUncheckedUpdateInputObjectSchema as AiQuestionCheckboxUncheckedUpdateInputObjectSchema } from './objects/AiQuestionCheckboxUncheckedUpdateInput.schema';

export const AiQuestionCheckboxUpsertOneSchema: z.ZodType<Prisma.AiQuestionCheckboxUpsertArgs> = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), include: AiQuestionCheckboxIncludeObjectSchema.optional(), where: AiQuestionCheckboxWhereUniqueInputObjectSchema, create: z.union([ AiQuestionCheckboxCreateInputObjectSchema, AiQuestionCheckboxUncheckedCreateInputObjectSchema ]), update: z.union([ AiQuestionCheckboxUpdateInputObjectSchema, AiQuestionCheckboxUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxUpsertArgs>;

export const AiQuestionCheckboxUpsertOneZodSchema = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), include: AiQuestionCheckboxIncludeObjectSchema.optional(), where: AiQuestionCheckboxWhereUniqueInputObjectSchema, create: z.union([ AiQuestionCheckboxCreateInputObjectSchema, AiQuestionCheckboxUncheckedCreateInputObjectSchema ]), update: z.union([ AiQuestionCheckboxUpdateInputObjectSchema, AiQuestionCheckboxUncheckedUpdateInputObjectSchema ]) }).strict();