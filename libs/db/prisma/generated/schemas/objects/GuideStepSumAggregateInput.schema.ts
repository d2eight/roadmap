import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const GuideStepSumAggregateInputObjectSchema: z.ZodType<Prisma.GuideStepSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepSumAggregateInputType>;
export const GuideStepSumAggregateInputObjectZodSchema = makeSchema();
