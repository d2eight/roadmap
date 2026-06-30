import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  question: z.string(),
  aiQuestionsId: z.string(),
  answer: z.string().optional().nullable()
}).strict();
export const AiQuestionCreateManyInputObjectSchema: z.ZodType<Prisma.AiQuestionCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCreateManyInput>;
export const AiQuestionCreateManyInputObjectZodSchema = makeSchema();
