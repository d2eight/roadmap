import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  guideId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const AiQuestionsCountAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCountAggregateInputType>;
export const AiQuestionsCountAggregateInputObjectZodSchema = makeSchema();
