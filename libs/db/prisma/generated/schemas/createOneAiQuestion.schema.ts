import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionSelectObjectSchema as AiQuestionSelectObjectSchema } from './objects/AiQuestionSelect.schema';
import { AiQuestionIncludeObjectSchema as AiQuestionIncludeObjectSchema } from './objects/AiQuestionInclude.schema';
import { AiQuestionCreateInputObjectSchema as AiQuestionCreateInputObjectSchema } from './objects/AiQuestionCreateInput.schema';
import { AiQuestionUncheckedCreateInputObjectSchema as AiQuestionUncheckedCreateInputObjectSchema } from './objects/AiQuestionUncheckedCreateInput.schema';

export const AiQuestionCreateOneSchema: z.ZodType<Prisma.AiQuestionCreateArgs> = z.object({ select: AiQuestionSelectObjectSchema.optional(), include: AiQuestionIncludeObjectSchema.optional(), data: z.union([AiQuestionCreateInputObjectSchema, AiQuestionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AiQuestionCreateArgs>;

export const AiQuestionCreateOneZodSchema = z.object({ select: AiQuestionSelectObjectSchema.optional(), include: AiQuestionIncludeObjectSchema.optional(), data: z.union([AiQuestionCreateInputObjectSchema, AiQuestionUncheckedCreateInputObjectSchema]) }).strict();