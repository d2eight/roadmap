import type { Prisma } from '../../../generated/prisma/client';
import * as z from 'zod';
import { AiQuestionABCDSelectObjectSchema as AiQuestionABCDSelectObjectSchema } from './objects/AiQuestionABCDSelect.schema';
import { AiQuestionABCDIncludeObjectSchema as AiQuestionABCDIncludeObjectSchema } from './objects/AiQuestionABCDInclude.schema';
import { AiQuestionABCDWhereUniqueInputObjectSchema as AiQuestionABCDWhereUniqueInputObjectSchema } from './objects/AiQuestionABCDWhereUniqueInput.schema';

export const AiQuestionABCDFindUniqueOrThrowSchema: z.ZodType<Prisma.AiQuestionABCDFindUniqueOrThrowArgs> = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), include: AiQuestionABCDIncludeObjectSchema.optional(), where: AiQuestionABCDWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiQuestionABCDFindUniqueOrThrowArgs>;

export const AiQuestionABCDFindUniqueOrThrowZodSchema = z.object({ select: AiQuestionABCDSelectObjectSchema.optional(), include: AiQuestionABCDIncludeObjectSchema.optional(), where: AiQuestionABCDWhereUniqueInputObjectSchema }).strict();