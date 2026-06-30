import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDSelectObjectSchema as AiQuestionABCDSelectObjectSchema } from './objects/AiQuestionABCDSelect.schema';
import { AiQuestionABCDIncludeObjectSchema as AiQuestionABCDIncludeObjectSchema } from './objects/AiQuestionABCDInclude.schema';
import { AiQuestionABCDWhereUniqueInputObjectSchema as AiQuestionABCDWhereUniqueInputObjectSchema } from './objects/AiQuestionABCDWhereUniqueInput.schema';

export const AiQuestionABCDDeleteOneSchema: z.ZodType<Prisma.AiQuestionABCDDeleteArgs> = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), include: AiQuestionABCDIncludeObjectSchema.optional(), where: AiQuestionABCDWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDDeleteArgs>;

export const AiQuestionABCDDeleteOneZodSchema = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), include: AiQuestionABCDIncludeObjectSchema.optional(), where: AiQuestionABCDWhereUniqueInputObjectSchema }).strict();