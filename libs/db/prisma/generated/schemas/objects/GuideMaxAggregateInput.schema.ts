import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  prompt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  status: z.literal(true).optional(),
  progressStatus: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const GuideMaxAggregateInputObjectSchema: z.ZodType<Prisma.GuideMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GuideMaxAggregateInputType>;
export const GuideMaxAggregateInputObjectZodSchema = makeSchema();
