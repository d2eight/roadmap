import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  guideId: z.literal(true).optional()
}).strict();
export const AiQuestionsMaxAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsMaxAggregateInputType>;
export const AiQuestionsMaxAggregateInputObjectZodSchema = makeSchema();
