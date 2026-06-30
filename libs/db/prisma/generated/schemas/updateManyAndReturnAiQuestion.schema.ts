import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionSelectObjectSchema as AiQuestionSelectObjectSchema } from './objects/AiQuestionSelect.schema';
import { AiQuestionUpdateManyMutationInputObjectSchema as AiQuestionUpdateManyMutationInputObjectSchema } from './objects/AiQuestionUpdateManyMutationInput.schema';
import { AiQuestionWhereInputObjectSchema as AiQuestionWhereInputObjectSchema } from './objects/AiQuestionWhereInput.schema';

export const AiQuestionUpdateManyAndReturnSchema: z.ZodType<Prisma.AiQuestionUpdateManyAndReturnArgs> = z.object({ select: AiQuestionSelectObjectSchema.optional(), data: AiQuestionUpdateManyMutationInputObjectSchema, where: AiQuestionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionUpdateManyAndReturnArgs>;

export const AiQuestionUpdateManyAndReturnZodSchema = z.object({ select: AiQuestionSelectObjectSchema.optional(), data: AiQuestionUpdateManyMutationInputObjectSchema, where: AiQuestionWhereInputObjectSchema.optional() }).strict();