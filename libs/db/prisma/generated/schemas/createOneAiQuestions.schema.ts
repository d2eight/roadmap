import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsSelectObjectSchema as AiQuestionsSelectObjectSchema } from './objects/AiQuestionsSelect.schema';
import { AiQuestionsIncludeObjectSchema as AiQuestionsIncludeObjectSchema } from './objects/AiQuestionsInclude.schema';
import { AiQuestionsCreateInputObjectSchema as AiQuestionsCreateInputObjectSchema } from './objects/AiQuestionsCreateInput.schema';
import { AiQuestionsUncheckedCreateInputObjectSchema as AiQuestionsUncheckedCreateInputObjectSchema } from './objects/AiQuestionsUncheckedCreateInput.schema';

export const AiQuestionsCreateOneSchema: z.ZodType<Prisma.AiQuestionsCreateArgs> = z.object({ select: AiQuestionsSelectObjectSchema.optional(), include: AiQuestionsIncludeObjectSchema.optional(), data: z.union([AiQuestionsCreateInputObjectSchema, AiQuestionsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AiQuestionsCreateArgs>;

export const AiQuestionsCreateOneZodSchema = z.object({ select: AiQuestionsSelectObjectSchema.optional(), include: AiQuestionsIncludeObjectSchema.optional(), data: z.union([AiQuestionsCreateInputObjectSchema, AiQuestionsUncheckedCreateInputObjectSchema]) }).strict();