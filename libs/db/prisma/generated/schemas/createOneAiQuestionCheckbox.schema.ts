import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxSelectObjectSchema as AiQuestionCheckboxSelectObjectSchema } from './objects/AiQuestionCheckboxSelect.schema';
import { AiQuestionCheckboxIncludeObjectSchema as AiQuestionCheckboxIncludeObjectSchema } from './objects/AiQuestionCheckboxInclude.schema';
import { AiQuestionCheckboxCreateInputObjectSchema as AiQuestionCheckboxCreateInputObjectSchema } from './objects/AiQuestionCheckboxCreateInput.schema';
import { AiQuestionCheckboxUncheckedCreateInputObjectSchema as AiQuestionCheckboxUncheckedCreateInputObjectSchema } from './objects/AiQuestionCheckboxUncheckedCreateInput.schema';

export const AiQuestionCheckboxCreateOneSchema: z.ZodType<Prisma.AiQuestionCheckboxCreateArgs> = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), include: AiQuestionCheckboxIncludeObjectSchema.optional(), data: z.union([AiQuestionCheckboxCreateInputObjectSchema, AiQuestionCheckboxUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxCreateArgs>;

export const AiQuestionCheckboxCreateOneZodSchema = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), include: AiQuestionCheckboxIncludeObjectSchema.optional(), data: z.union([AiQuestionCheckboxCreateInputObjectSchema, AiQuestionCheckboxUncheckedCreateInputObjectSchema]) }).strict();