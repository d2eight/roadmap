import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GuideStepCreateManyGuideInputObjectSchema: z.ZodType<Prisma.GuideStepCreateManyGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepCreateManyGuideInput>;
export const GuideStepCreateManyGuideInputObjectZodSchema = makeSchema();
