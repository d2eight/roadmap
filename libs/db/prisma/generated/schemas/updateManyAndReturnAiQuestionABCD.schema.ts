import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDSelectObjectSchema as AiQuestionABCDSelectObjectSchema } from './objects/AiQuestionABCDSelect.schema';
import { AiQuestionABCDUpdateManyMutationInputObjectSchema as AiQuestionABCDUpdateManyMutationInputObjectSchema } from './objects/AiQuestionABCDUpdateManyMutationInput.schema';
import { AiQuestionABCDWhereInputObjectSchema as AiQuestionABCDWhereInputObjectSchema } from './objects/AiQuestionABCDWhereInput.schema';

export const AiQuestionABCDUpdateManyAndReturnSchema: z.ZodType<Prisma.AiQuestionABCDUpdateManyAndReturnArgs> = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), data: AiQuestionABCDUpdateManyMutationInputObjectSchema, where: AiQuestionABCDWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDUpdateManyAndReturnArgs>;

export const AiQuestionABCDUpdateManyAndReturnZodSchema = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), data: AiQuestionABCDUpdateManyMutationInputObjectSchema, where: AiQuestionABCDWhereInputObjectSchema.optional() }).strict();