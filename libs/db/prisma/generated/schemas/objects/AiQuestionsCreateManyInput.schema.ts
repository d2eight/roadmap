import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  guideId: z.string()
}).strict();
export const AiQuestionsCreateManyInputObjectSchema: z.ZodType<Prisma.AiQuestionsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCreateManyInput>;
export const AiQuestionsCreateManyInputObjectZodSchema = makeSchema();
