import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  aiQuestionsId: z.string().optional()
}).strict();
export const AiQuestionABCDWhereUniqueInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDWhereUniqueInput>;
export const AiQuestionABCDWhereUniqueInputObjectZodSchema = makeSchema();
