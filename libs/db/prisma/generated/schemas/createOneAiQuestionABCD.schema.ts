import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDSelectObjectSchema as AiQuestionABCDSelectObjectSchema } from './objects/AiQuestionABCDSelect.schema';
import { AiQuestionABCDIncludeObjectSchema as AiQuestionABCDIncludeObjectSchema } from './objects/AiQuestionABCDInclude.schema';
import { AiQuestionABCDCreateInputObjectSchema as AiQuestionABCDCreateInputObjectSchema } from './objects/AiQuestionABCDCreateInput.schema';
import { AiQuestionABCDUncheckedCreateInputObjectSchema as AiQuestionABCDUncheckedCreateInputObjectSchema } from './objects/AiQuestionABCDUncheckedCreateInput.schema';

export const AiQuestionABCDCreateOneSchema: z.ZodType<Prisma.AiQuestionABCDCreateArgs> = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), include: AiQuestionABCDIncludeObjectSchema.optional(), data: z.union([AiQuestionABCDCreateInputObjectSchema, AiQuestionABCDUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDCreateArgs>;

export const AiQuestionABCDCreateOneZodSchema = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), include: AiQuestionABCDIncludeObjectSchema.optional(), data: z.union([AiQuestionABCDCreateInputObjectSchema, AiQuestionABCDUncheckedCreateInputObjectSchema]) }).strict();