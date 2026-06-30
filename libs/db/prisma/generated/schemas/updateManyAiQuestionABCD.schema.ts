import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDUpdateManyMutationInputObjectSchema as AiQuestionABCDUpdateManyMutationInputObjectSchema } from './objects/AiQuestionABCDUpdateManyMutationInput.schema';
import { AiQuestionABCDWhereInputObjectSchema as AiQuestionABCDWhereInputObjectSchema } from './objects/AiQuestionABCDWhereInput.schema';

export const AiQuestionABCDUpdateManySchema: z.ZodType<Prisma.AiQuestionABCDUpdateManyArgs> = z.object({ data: AiQuestionABCDUpdateManyMutationInputObjectSchema, where: AiQuestionABCDWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDUpdateManyArgs>;

export const AiQuestionABCDUpdateManyZodSchema = z.object({ data: AiQuestionABCDUpdateManyMutationInputObjectSchema, where: AiQuestionABCDWhereInputObjectSchema.optional() }).strict();