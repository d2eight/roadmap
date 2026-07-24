import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  status: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GuideStepCreateWithoutGuideInputObjectSchema: z.ZodType<Prisma.GuideStepCreateWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepCreateWithoutGuideInput>;
export const GuideStepCreateWithoutGuideInputObjectZodSchema = makeSchema();
