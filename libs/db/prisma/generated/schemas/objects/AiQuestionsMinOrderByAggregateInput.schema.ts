import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  guideId: SortOrderSchema.optional()
}).strict();
export const AiQuestionsMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionsMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsMinOrderByAggregateInput>;
export const AiQuestionsMinOrderByAggregateInputObjectZodSchema = makeSchema();
