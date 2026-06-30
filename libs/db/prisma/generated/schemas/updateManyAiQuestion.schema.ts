import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionUpdateManyMutationInputObjectSchema as AiQuestionUpdateManyMutationInputObjectSchema } from './objects/AiQuestionUpdateManyMutationInput.schema';
import { AiQuestionWhereInputObjectSchema as AiQuestionWhereInputObjectSchema } from './objects/AiQuestionWhereInput.schema';

export const AiQuestionUpdateManySchema: z.ZodType<Prisma.AiQuestionUpdateManyArgs> = z.object({ data: AiQuestionUpdateManyMutationInputObjectSchema, where: AiQuestionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionUpdateManyArgs>;

export const AiQuestionUpdateManyZodSchema = z.object({ data: AiQuestionUpdateManyMutationInputObjectSchema, where: AiQuestionWhereInputObjectSchema.optional() }).strict();