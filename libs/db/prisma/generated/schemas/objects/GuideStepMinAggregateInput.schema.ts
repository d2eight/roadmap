import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  guideId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const GuideStepMinAggregateInputObjectSchema: z.ZodType<Prisma.GuideStepMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepMinAggregateInputType>;
export const GuideStepMinAggregateInputObjectZodSchema = makeSchema();
