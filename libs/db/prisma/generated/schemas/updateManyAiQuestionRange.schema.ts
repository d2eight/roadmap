import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionRangeUpdateManyMutationInputObjectSchema as AiQuestionRangeUpdateManyMutationInputObjectSchema } from './objects/AiQuestionRangeUpdateManyMutationInput.schema';
import { AiQuestionRangeWhereInputObjectSchema as AiQuestionRangeWhereInputObjectSchema } from './objects/AiQuestionRangeWhereInput.schema';

export const AiQuestionRangeUpdateManySchema: z.ZodType<Prisma.AiQuestionRangeUpdateManyArgs> = z.object({ data: AiQuestionRangeUpdateManyMutationInputObjectSchema, where: AiQuestionRangeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeUpdateManyArgs>;

export const AiQuestionRangeUpdateManyZodSchema = z.object({ data: AiQuestionRangeUpdateManyMutationInputObjectSchema, where: AiQuestionRangeWhereInputObjectSchema.optional() }).strict();