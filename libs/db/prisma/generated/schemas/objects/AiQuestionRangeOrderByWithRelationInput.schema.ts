import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AiQuestionsOrderByWithRelationInputObjectSchema as AiQuestionsOrderByWithRelationInputObjectSchema } from './AiQuestionsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  question: SortOrderSchema.optional(),
  aiQuestionsId: SortOrderSchema.optional(),
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  answer: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  aiQuestions: z.lazy(() => AiQuestionsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AiQuestionRangeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeOrderByWithRelationInput>;
export const AiQuestionRangeOrderByWithRelationInputObjectZodSchema = makeSchema();
