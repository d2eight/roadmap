import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionSelectObjectSchema as AiQuestionSelectObjectSchema } from './objects/AiQuestionSelect.schema';
import { AiQuestionIncludeObjectSchema as AiQuestionIncludeObjectSchema } from './objects/AiQuestionInclude.schema';
import { AiQuestionWhereUniqueInputObjectSchema as AiQuestionWhereUniqueInputObjectSchema } from './objects/AiQuestionWhereUniqueInput.schema';
import { AiQuestionCreateInputObjectSchema as AiQuestionCreateInputObjectSchema } from './objects/AiQuestionCreateInput.schema';
import { AiQuestionUncheckedCreateInputObjectSchema as AiQuestionUncheckedCreateInputObjectSchema } from './objects/AiQuestionUncheckedCreateInput.schema';
import { AiQuestionUpdateInputObjectSchema as AiQuestionUpdateInputObjectSchema } from './objects/AiQuestionUpdateInput.schema';
import { AiQuestionUncheckedUpdateInputObjectSchema as AiQuestionUncheckedUpdateInputObjectSchema } from './objects/AiQuestionUncheckedUpdateInput.schema';

export const AiQuestionUpsertOneSchema: z.ZodType<Prisma.AiQuestionUpsertArgs> = z.object({ select: AiQuestionSelectObjectSchema.optional(), include: AiQuestionIncludeObjectSchema.optional(), where: AiQuestionWhereUniqueInputObjectSchema, create: z.union([ AiQuestionCreateInputObjectSchema, AiQuestionUncheckedCreateInputObjectSchema ]), update: z.union([ AiQuestionUpdateInputObjectSchema, AiQuestionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AiQuestionUpsertArgs>;

export const AiQuestionUpsertOneZodSchema = z.object({ select: AiQuestionSelectObjectSchema.optional(), include: AiQuestionIncludeObjectSchema.optional(), where: AiQuestionWhereUniqueInputObjectSchema, create: z.union([ AiQuestionCreateInputObjectSchema, AiQuestionUncheckedCreateInputObjectSchema ]), update: z.union([ AiQuestionUpdateInputObjectSchema, AiQuestionUncheckedUpdateInputObjectSchema ]) }).strict();