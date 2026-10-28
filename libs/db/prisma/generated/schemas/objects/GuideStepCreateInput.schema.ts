import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema';
import { GuideCreateNestedOneWithoutStepsInputObjectSchema as GuideCreateNestedOneWithoutStepsInputObjectSchema } from './GuideCreateNestedOneWithoutStepsInput.schema'

const makeSchema = () => z.object({
  title: z.string(),
  description: z.string(),
  status: GuideStepStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  guide: z.lazy(() => GuideCreateNestedOneWithoutStepsInputObjectSchema)
}).strict();
export const GuideStepCreateInputObjectSchema: z.ZodType<Prisma.GuideStepCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepCreateInput>;
export const GuideStepCreateInputObjectZodSchema = makeSchema();
