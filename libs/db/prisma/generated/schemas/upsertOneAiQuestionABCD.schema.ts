import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDSelectObjectSchema as AiQuestionABCDSelectObjectSchema } from './objects/AiQuestionABCDSelect.schema';
import { AiQuestionABCDIncludeObjectSchema as AiQuestionABCDIncludeObjectSchema } from './objects/AiQuestionABCDInclude.schema';
import { AiQuestionABCDWhereUniqueInputObjectSchema as AiQuestionABCDWhereUniqueInputObjectSchema } from './objects/AiQuestionABCDWhereUniqueInput.schema';
import { AiQuestionABCDCreateInputObjectSchema as AiQuestionABCDCreateInputObjectSchema } from './objects/AiQuestionABCDCreateInput.schema';
import { AiQuestionABCDUncheckedCreateInputObjectSchema as AiQuestionABCDUncheckedCreateInputObjectSchema } from './objects/AiQuestionABCDUncheckedCreateInput.schema';
import { AiQuestionABCDUpdateInputObjectSchema as AiQuestionABCDUpdateInputObjectSchema } from './objects/AiQuestionABCDUpdateInput.schema';
import { AiQuestionABCDUncheckedUpdateInputObjectSchema as AiQuestionABCDUncheckedUpdateInputObjectSchema } from './objects/AiQuestionABCDUncheckedUpdateInput.schema';

export const AiQuestionABCDUpsertOneSchema: z.ZodType<Prisma.AiQuestionABCDUpsertArgs> = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), include: AiQuestionABCDIncludeObjectSchema.optional(), where: AiQuestionABCDWhereUniqueInputObjectSchema, create: z.union([ AiQuestionABCDCreateInputObjectSchema, AiQuestionABCDUncheckedCreateInputObjectSchema ]), update: z.union([ AiQuestionABCDUpdateInputObjectSchema, AiQuestionABCDUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDUpsertArgs>;

export const AiQuestionABCDUpsertOneZodSchema = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), include: AiQuestionABCDIncludeObjectSchema.optional(), where: AiQuestionABCDWhereUniqueInputObjectSchema, create: z.union([ AiQuestionABCDCreateInputObjectSchema, AiQuestionABCDUncheckedCreateInputObjectSchema ]), update: z.union([ AiQuestionABCDUpdateInputObjectSchema, AiQuestionABCDUncheckedUpdateInputObjectSchema ]) }).strict();