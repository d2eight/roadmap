import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AiQuestionsOrderByWithRelationInputObjectSchema as AiQuestionsOrderByWithRelationInputObjectSchema } from './AiQuestionsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  A: SortOrderSchema.optional(),
  B: SortOrderSchema.optional(),
  C: SortOrderSchema.optional(),
  D: SortOrderSchema.optional(),
  E: SortOrderSchema.optional(),
  F: SortOrderSchema.optional(),
  answer: SortOrderSchema.optional(),
  aiQuestions: z.lazy(() => AiQuestionsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AiQuestionCheckboxOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AiQuestionCheckboxOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionCheckboxOrderByWithRelationInput>;
export const AiQuestionCheckboxOrderByWithRelationInputObjectZodSchema = makeSchema();
