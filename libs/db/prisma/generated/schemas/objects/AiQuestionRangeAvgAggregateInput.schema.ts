import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  start: z.literal(true).optional(),
  end: z.literal(true).optional(),
  answer: z.literal(true).optional()
}).strict();
export const AiQuestionRangeAvgAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeAvgAggregateInputType>;
export const AiQuestionRangeAvgAggregateInputObjectZodSchema = makeSchema();
