import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  guideId: z.string(),
  title: z.string(),
  description: z.string(),
  status: GuideStepStatusSchema.optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const GuideStepUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GuideStepUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepUncheckedCreateInput>;
export const GuideStepUncheckedCreateInputObjectZodSchema = makeSchema();
