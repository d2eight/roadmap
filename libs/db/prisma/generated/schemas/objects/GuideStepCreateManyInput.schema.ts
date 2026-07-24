import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  guideId: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GuideStepCreateManyInputObjectSchema: z.ZodType<Prisma.GuideStepCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepCreateManyInput>;
export const GuideStepCreateManyInputObjectZodSchema = makeSchema();
