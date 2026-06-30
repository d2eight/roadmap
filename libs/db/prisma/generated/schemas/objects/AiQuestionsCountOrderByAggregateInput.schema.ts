import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  guideId: SortOrderSchema.optional()
}).strict();
export const AiQuestionsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiQuestionsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsCountOrderByAggregateInput>;
export const AiQuestionsCountOrderByAggregateInputObjectZodSchema = makeSchema();
