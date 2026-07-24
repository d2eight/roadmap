import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  guideId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GuideStepCountAggregateInputObjectSchema: z.ZodType<Prisma.GuideStepCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepCountAggregateInputType>;
export const GuideStepCountAggregateInputObjectZodSchema = makeSchema();
