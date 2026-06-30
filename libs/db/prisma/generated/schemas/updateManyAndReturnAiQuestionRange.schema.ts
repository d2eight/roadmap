import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionRangeSelectObjectSchema as AiQuestionRangeSelectObjectSchema } from './objects/AiQuestionRangeSelect.schema';
import { AiQuestionRangeUpdateManyMutationInputObjectSchema as AiQuestionRangeUpdateManyMutationInputObjectSchema } from './objects/AiQuestionRangeUpdateManyMutationInput.schema';
import { AiQuestionRangeWhereInputObjectSchema as AiQuestionRangeWhereInputObjectSchema } from './objects/AiQuestionRangeWhereInput.schema';

export const AiQuestionRangeUpdateManyAndReturnSchema: z.ZodType<Prisma.AiQuestionRangeUpdateManyAndReturnArgs> = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), data: AiQuestionRangeUpdateManyMutationInputObjectSchema, where: AiQuestionRangeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionRangeUpdateManyAndReturnArgs>;

export const AiQuestionRangeUpdateManyAndReturnZodSchema = z.object({ select: AiQuestionRangeSelectObjectSchema.optional(), data: AiQuestionRangeUpdateManyMutationInputObjectSchema, where: AiQuestionRangeWhereInputObjectSchema.optional() }).strict();