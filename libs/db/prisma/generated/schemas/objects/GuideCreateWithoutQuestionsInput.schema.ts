import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { UserCreateNestedOneWithoutGuidesInputObjectSchema as UserCreateNestedOneWithoutGuidesInputObjectSchema } from './UserCreateNestedOneWithoutGuidesInput.schema';
import { GuideStepCreateNestedManyWithoutGuideInputObjectSchema as GuideStepCreateNestedManyWithoutGuideInputObjectSchema } from './GuideStepCreateNestedManyWithoutGuideInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  prompt: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  externalAiQuestionsStatus: z.boolean().optional(),
  status: GuideStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutGuidesInputObjectSchema),
  steps: z.lazy(() => GuideStepCreateNestedManyWithoutGuideInputObjectSchema).optional()
}).strict();
export const GuideCreateWithoutQuestionsInputObjectSchema: z.ZodType<Prisma.GuideCreateWithoutQuestionsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCreateWithoutQuestionsInput>;
export const GuideCreateWithoutQuestionsInputObjectZodSchema = makeSchema();
