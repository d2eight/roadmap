import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { GuideStepUncheckedCreateNestedManyWithoutGuideInputObjectSchema as GuideStepUncheckedCreateNestedManyWithoutGuideInputObjectSchema } from './GuideStepUncheckedCreateNestedManyWithoutGuideInput.schema';
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
  steps: z.lazy(() => GuideStepUncheckedCreateNestedManyWithoutGuideInputObjectSchema).optional(),
  questions: z.lazy(() => AiQuestionsUncheckedCreateNestedOneWithoutGuideInputObjectSchema).optional()
}).strict();
export const GuideUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GuideUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUncheckedCreateInput>;
export const GuideUncheckedCreateInputObjectZodSchema = makeSchema();
