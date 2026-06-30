import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { AiQuestionsUncheckedCreateNestedOneWithoutGuideInputObjectSchema as AiQuestionsUncheckedCreateNestedOneWithoutGuideInputObjectSchema } from './AiQuestionsUncheckedCreateNestedOneWithoutGuideInput.schema'

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
  questions: z.lazy(() => AiQuestionsUncheckedCreateNestedOneWithoutGuideInputObjectSchema).optional()
}).strict();
export const GuideUncheckedCreateWithoutStepsInputObjectSchema: z.ZodType<Prisma.GuideUncheckedCreateWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUncheckedCreateWithoutStepsInput>;
export const GuideUncheckedCreateWithoutStepsInputObjectZodSchema = makeSchema();
