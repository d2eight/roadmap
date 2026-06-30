import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStatusSchema } from '../enums/GuideStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  prompt: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  externalAiQuestionsStatus: z.boolean().optional(),
  status: GuideStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const GuideCreateManyUserInputObjectSchema: z.ZodType<Prisma.GuideCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideCreateManyUserInput>;
export const GuideCreateManyUserInputObjectZodSchema = makeSchema();
