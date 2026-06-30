import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  aiQuestionsId: z.string().optional()
}).strict();
export const AiQuestionCheckboxWhereUniqueInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxWhereUniqueInput>;
export const AiQuestionCheckboxWhereUniqueInputObjectZodSchema = makeSchema();
