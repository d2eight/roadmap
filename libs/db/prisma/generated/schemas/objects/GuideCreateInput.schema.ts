import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { UserCreateNestedOneWithoutGuidesInputObjectSchema as UserCreateNestedOneWithoutGuidesInputObjectSchema } from './UserCreateNestedOneWithoutGuidesInput.schema';
import { GuideStepCreateNestedManyWithoutGuideInputObjectSchema as GuideStepCreateNestedManyWithoutGuideInputObjectSchema } from './GuideStepCreateNestedManyWithoutGuideInput.schema';
import { AiQuestionsCreateNestedOneWithoutGuideInputObjectSchema as AiQuestionsCreateNestedOneWithoutGuideInputObjectSchema } from './AiQuestionsCreateNestedOneWithoutGuideInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  prompt: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  externalAiQuestionsStatus: z.boolean().optional(),
  status: GuideStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutGuidesInputObjectSchema),
  steps: z.lazy(() => GuideStepCreateNestedManyWithoutGuideInputObjectSchema).optional(),
  questions: z.lazy(() => AiQuestionsCreateNestedOneWithoutGuideInputObjectSchema).optional()
}).strict();
export const GuideCreateInputObjectSchema: z.ZodType<Prisma.GuideCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCreateInput>;
export const GuideCreateInputObjectZodSchema = makeSchema();
