import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDSelectObjectSchema as AiQuestionABCDSelectObjectSchema } from './objects/AiQuestionABCDSelect.schema';
import { AiQuestionABCDIncludeObjectSchema as AiQuestionABCDIncludeObjectSchema } from './objects/AiQuestionABCDInclude.schema';
import { AiQuestionABCDUpdateInputObjectSchema as AiQuestionABCDUpdateInputObjectSchema } from './objects/AiQuestionABCDUpdateInput.schema';
import { AiQuestionABCDUncheckedUpdateInputObjectSchema as AiQuestionABCDUncheckedUpdateInputObjectSchema } from './objects/AiQuestionABCDUncheckedUpdateInput.schema';
import { AiQuestionABCDWhereUniqueInputObjectSchema as AiQuestionABCDWhereUniqueInputObjectSchema } from './objects/AiQuestionABCDWhereUniqueInput.schema';

export const AiQuestionABCDUpdateOneSchema: z.ZodType<Prisma.AiQuestionABCDUpdateArgs> = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), include: AiQuestionABCDIncludeObjectSchema.optional(), data: z.union([AiQuestionABCDUpdateInputObjectSchema, AiQuestionABCDUncheckedUpdateInputObjectSchema]), where: AiQuestionABCDWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDUpdateArgs>;

export const AiQuestionABCDUpdateOneZodSchema = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), include: AiQuestionABCDIncludeObjectSchema.optional(), data: z.union([AiQuestionABCDUpdateInputObjectSchema, AiQuestionABCDUncheckedUpdateInputObjectSchema]), where: AiQuestionABCDWhereUniqueInputObjectSchema }).strict();