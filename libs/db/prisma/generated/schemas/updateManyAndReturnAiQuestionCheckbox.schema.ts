import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxSelectObjectSchema as AiQuestionCheckboxSelectObjectSchema } from './objects/AiQuestionCheckboxSelect.schema';
import { AiQuestionCheckboxUpdateManyMutationInputObjectSchema as AiQuestionCheckboxUpdateManyMutationInputObjectSchema } from './objects/AiQuestionCheckboxUpdateManyMutationInput.schema';
import { AiQuestionCheckboxWhereInputObjectSchema as AiQuestionCheckboxWhereInputObjectSchema } from './objects/AiQuestionCheckboxWhereInput.schema';

export const AiQuestionCheckboxUpdateManyAndReturnSchema: z.ZodType<Prisma.AiQuestionCheckboxUpdateManyAndReturnArgs> = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), data: AiQuestionCheckboxUpdateManyMutationInputObjectSchema, where: AiQuestionCheckboxWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxUpdateManyAndReturnArgs>;

export const AiQuestionCheckboxUpdateManyAndReturnZodSchema = z.object({ select: AiQuestionCheckboxSelectObjectSchema.optional(), data: AiQuestionCheckboxUpdateManyMutationInputObjectSchema, where: AiQuestionCheckboxWhereInputObjectSchema.optional() }).strict();