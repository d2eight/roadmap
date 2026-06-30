import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { GuideStepUncheckedCreateNestedManyWithoutGuideInputObjectSchema as GuideStepUncheckedCreateNestedManyWithoutGuideInputObjectSchema } from './GuideStepUncheckedCreateNestedManyWithoutGuideInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  prompt: z.string(),
  userId: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  externalAiQuestionsStatus: z.boolean().optional(),
  status: GuideStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  steps: z.lazy(() => GuideStepUncheckedCreateNestedManyWithoutGuideInputObjectSchema).optional()
}).strict();
export const GuideUncheckedCreateWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.GuideUncheckedCreateWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUncheckedCreateWithoutQuestionsInput>;
export const GuideUncheckedCreateWithoutQuestionsInputObjectZodSchema = makeSchema();
