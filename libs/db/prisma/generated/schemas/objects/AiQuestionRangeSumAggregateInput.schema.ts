import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  start: z.literal(true).optional(),
  end: z.literal(true).optional(),
  answer: z.literal(true).optional()
}).strict();
export const AiQuestionRangeSumAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeSumAggregateInputType>;
export const AiQuestionRangeSumAggregateInputObjectZodSchema = makeSchema();
