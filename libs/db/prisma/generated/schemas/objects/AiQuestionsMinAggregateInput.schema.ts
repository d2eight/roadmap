import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  guideId: z.literal(true).optional()
}).strict();
export const AiQuestionsMinAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsMinAggregateInputType>;
export const AiQuestionsMinAggregateInputObjectZodSchema = makeSchema();
