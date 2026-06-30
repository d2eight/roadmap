import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsSelectObjectSchema as AiQuestionsSelectObjectSchema } from './objects/AiQuestionsSelect.schema';
import { AiQuestionsUpdateManyMutationInputObjectSchema as AiQuestionsUpdateManyMutationInputObjectSchema } from './objects/AiQuestionsUpdateManyMutationInput.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './objects/AiQuestionsWhereInput.schema';

export const AiQuestionsUpdateManyAndReturnSchema: z.ZodType<Prisma.AiQuestionsUpdateManyAndReturnArgs> = z.object({ select: AiQuestionsSelectObjectSchema.optional(), data: AiQuestionsUpdateManyMutationInputObjectSchema, where: AiQuestionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionsUpdateManyAndReturnArgs>;

export const AiQuestionsUpdateManyAndReturnZodSchema = z.object({ select: AiQuestionsSelectObjectSchema.optional(), data: AiQuestionsUpdateManyMutationInputObjectSchema, where: AiQuestionsWhereInputObjectSchema.optional() }).strict();