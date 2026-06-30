import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsSelectObjectSchema as AiQuestionsSelectObjectSchema } from './objects/AiQuestionsSelect.schema';
import { AiQuestionsIncludeObjectSchema as AiQuestionsIncludeObjectSchema } from './objects/AiQuestionsInclude.schema';
import { AiQuestionsUpdateInputObjectSchema as AiQuestionsUpdateInputObjectSchema } from './objects/AiQuestionsUpdateInput.schema';
import { AiQuestionsUncheckedUpdateInputObjectSchema as AiQuestionsUncheckedUpdateInputObjectSchema } from './objects/AiQuestionsUncheckedUpdateInput.schema';
import { AiQuestionsWhereUniqueInputObjectSchema as AiQuestionsWhereUniqueInputObjectSchema } from './objects/AiQuestionsWhereUniqueInput.schema';

export const AiQuestionsUpdateOneSchema: z.ZodType<Prisma.AiQuestionsUpdateArgs> = z.object({ select: AiQuestionsSelectObjectSchema.optional(), include: AiQuestionsIncludeObjectSchema.optional(), data: z.union([AiQuestionsUpdateInputObjectSchema, AiQuestionsUncheckedUpdateInputObjectSchema]), where: AiQuestionsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionsUpdateArgs>;

export const AiQuestionsUpdateOneZodSchema = z.object({ select: AiQuestionsSelectObjectSchema.optional(), include: AiQuestionsIncludeObjectSchema.optional(), data: z.union([AiQuestionsUpdateInputObjectSchema, AiQuestionsUncheckedUpdateInputObjectSchema]), where: AiQuestionsWhereUniqueInputObjectSchema }).strict();