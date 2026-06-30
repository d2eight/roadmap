import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  aiQuestionsId: z.string().optional()
}).strict();
export const AiQuestionWhereUniqueInputObjectSchema: z.ZodType<Prisma.AiQuestionWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionWhereUniqueInput>;
export const AiQuestionWhereUniqueInputObjectZodSchema = makeSchema();
