import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  aiQuestionsId: z.string().optional()
}).strict();
export const AiQuestionRangeWhereUniqueInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeWhereUniqueInput>;
export const AiQuestionRangeWhereUniqueInputObjectZodSchema = makeSchema();
