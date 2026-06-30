import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  guideId: z.string().optional()
}).strict();
export const AiQuestionsWhereUniqueInputObjectSchema: z.ZodType<Prisma.AiQuestionsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsWhereUniqueInput>;
export const AiQuestionsWhereUniqueInputObjectZodSchema = makeSchema();
