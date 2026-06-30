import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  start: SortOrderSchema.optional(),
  end: SortOrderSchema.optional(),
  answer: SortOrderSchema.optional()
}).strict();
export const AiQuestionRangeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionRangeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionRangeSumOrderByAggregateInput>;
export const AiQuestionRangeSumOrderByAggregateInputObjectZodSchema = makeSchema();
