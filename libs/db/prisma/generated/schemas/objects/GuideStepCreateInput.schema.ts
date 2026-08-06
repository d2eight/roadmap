import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuidStepStatusSchema } from '../enums/GuidStepStatus.schema';
import { GuideCreateNestedOneWithoutStepsInputObjectSchema as GuideCreateNestedOneWithoutStepsInputObjectSchema } from './GuideCreateNestedOneWithoutStepsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string(),
  status: GuidStepStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  guide: z.lazy(() => GuideCreateNestedOneWithoutStepsInputObjectSchema)
}).strict();
export const GuideStepCreateInputObjectSchema: z.ZodType<Prisma.GuideStepCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepCreateInput>;
export const GuideStepCreateInputObjectZodSchema = makeSchema();
