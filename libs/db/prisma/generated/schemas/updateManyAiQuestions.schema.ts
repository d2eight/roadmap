import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionsUpdateManyMutationInputObjectSchema as AiQuestionsUpdateManyMutationInputObjectSchema } from './objects/AiQuestionsUpdateManyMutationInput.schema';
import { AiQuestionsWhereInputObjectSchema as AiQuestionsWhereInputObjectSchema } from './objects/AiQuestionsWhereInput.schema';

export const AiQuestionsUpdateManySchema: z.ZodType<Prisma.AiQuestionsUpdateManyArgs> = z.object({ data: AiQuestionsUpdateManyMutationInputObjectSchema, where: AiQuestionsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionsUpdateManyArgs>;

export const AiQuestionsUpdateManyZodSchema = z.object({ data: AiQuestionsUpdateManyMutationInputObjectSchema, where: AiQuestionsWhereInputObjectSchema.optional() }).strict();