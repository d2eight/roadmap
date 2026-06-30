import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { GuideStepOrderByRelationAggregateInputObjectSchema as GuideStepOrderByRelationAggregateInputObjectSchema } from './GuideStepOrderByRelationAggregateInput.schema';
import { AiQuestionsOrderByWithRelationInputObjectSchema as AiQuestionsOrderByWithRelationInputObjectSchema } from './AiQuestionsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  prompt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  externalAiQuestionsStatus: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  steps: z.lazy(() => GuideStepOrderByRelationAggregateInputObjectSchema).optional(),
  questions: z.lazy(() => AiQuestionsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const GuideOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.GuideOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideOrderByWithRelationInput>;
export const GuideOrderByWithRelationInputObjectZodSchema = makeSchema();
