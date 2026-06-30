import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsSelectObjectSchema as AiQuestionsSelectObjectSchema } from './objects/AiQuestionsSelect.schema';
import { AiQuestionsIncludeObjectSchema as AiQuestionsIncludeObjectSchema } from './objects/AiQuestionsInclude.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './objects/AiQuestionsWhereUniqueInput.schema';
import { AiQuestionsCreateInputObjectSchema as AiQuestionsCreateInputObjectSchema } from './objects/AiQuestionsCreateInput.schema';
import { AiQuestionsUncheckedCreateInputObjectSchema as AiQuestionsUncheckedCreateInputObjectSchema } from './objects/AiQuestionsUncheckedCreateInput.schema';
import { AiQuestionsUpdateInputObjectSchema as AiQuestionsUpdateInputObjectSchema } from './objects/AiQuestionsUpdateInput.schema';
import { AiQuestionsUncheckedUpdateInputObjectSchema as AiQuestionsUncheckedUpdateInputObjectSchema } from './objects/AiQuestionsUncheckedUpdateInput.schema';

export const AiQuestionsUpsertOneSchema: z.ZodType<Prisma.AiQuestionsUpsertArgs> = z.object({ select: AiQuestionsSelectObjectSchema.optional(), include: AiQuestionsIncludeObjectSchema.optional(), where: AiQuestionsWhereUniqueInputObjectSchema, create: z.union([ AiQuestionsCreateInputObjectSchema, AiQuestionsUncheckedCreateInputObjectSchema ]), update: z.union([ AiQuestionsUpdateInputObjectSchema, AiQuestionsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AiQuestionsUpsertArgs>;

export const AiQuestionsUpsertOneZodSchema = z.object({ select: AiQuestionsSelectObjectSchema.optional(), include: AiQuestionsIncludeObjectSchema.optional(), where: AiQuestionsWhereUniqueInputObjectSchema, create: z.union([ AiQuestionsCreateInputObjectSchema, AiQuestionsUncheckedCreateInputObjectSchema ]), update: z.union([ AiQuestionsUpdateInputObjectSchema, AiQuestionsUncheckedUpdateInputObjectSchema ]) }).strict();