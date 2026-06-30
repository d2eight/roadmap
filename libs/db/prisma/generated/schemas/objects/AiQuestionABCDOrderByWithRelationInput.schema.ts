import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AiQuestionsOrderByWithRelationInputObjectSchema as AiQuestionsOrderByWithRelationInputObjectSchema } from './AiQuestionsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  A: SortOrderSchema.optional(),
  B: SortOrderSchema.optional(),
  C: SortOrderSchema.optional(),
  D: SortOrderSchema.optional(),
  answer: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  customAnswer: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  aiQuestions: z.lazy(() => AiQuestionsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AiQuestionABCDOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AiQuestionABCDOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionABCDOrderByWithRelationInput>;
export const AiQuestionABCDOrderByWithRelationInputObjectZodSchema = makeSchema();
