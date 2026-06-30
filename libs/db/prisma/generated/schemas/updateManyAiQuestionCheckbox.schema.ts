import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionCheckboxUpdateManyMutationInputObjectSchema as AiQuestionCheckboxUpdateManyMutationInputObjectSchema } from './objects/AiQuestionCheckboxUpdateManyMutationInput.schema';
import { AiQuestionCheckboxWhereInputObjectSchema as AiQuestionCheckboxWhereInputObjectSchema } from './objects/AiQuestionCheckboxWhereInput.schema';

export const AiQuestionCheckboxUpdateManySchema: z.ZodType<Prisma.AiQuestionCheckboxUpdateManyArgs> = z.object({ data: AiQuestionCheckboxUpdateManyMutationInputObjectSchema, where: AiQuestionCheckboxWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionCheckboxUpdateManyArgs>;

export const AiQuestionCheckboxUpdateManyZodSchema = z.object({ data: AiQuestionCheckboxUpdateManyMutationInputObjectSchema, where: AiQuestionCheckboxWhereInputObjectSchema.optional() }).strict();