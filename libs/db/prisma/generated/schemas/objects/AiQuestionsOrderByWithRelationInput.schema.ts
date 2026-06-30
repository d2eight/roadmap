import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GuideOrderByWithRelationInputObjectSchema as GuideOrderByWithRelationInputObjectSchema } from './GuideOrderByWithRelationInput.schema';
import { AiQuestionABCDOrderByWithRelationInputObjectSchema as AiQuestionABCDOrderByWithRelationInputObjectSchema } from './AiQuestionABCDOrderByWithRelationInput.schema';
import { AiQuestionRangeOrderByWithRelationInputObjectSchema as AiQuestionRangeOrderByWithRelationInputObjectSchema } from './AiQuestionRangeOrderByWithRelationInput.schema';
import { AiQuestionOrderByWithRelationInputObjectSchema as AiQuestionOrderByWithRelationInputObjectSchema } from './AiQuestionOrderByWithRelationInput.schema';
import { AiQuestionCheckboxOrderByWithRelationInputObjectSchema as AiQuestionCheckboxOrderByWithRelationInputObjectSchema } from './AiQuestionCheckboxOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  guideId: SortOrderSchema.optional(),
  guide: z.lazy(() => GuideOrderByWithRelationInputObjectSchema).optional(),
  AiQuestionABCD: z.lazy(() => AiQuestionABCDOrderByWithRelationInputObjectSchema).optional(),
  AiQuestionRange: z.lazy(() => AiQuestionRangeOrderByWithRelationInputObjectSchema).optional(),
  AiQuestion: z.lazy(() => AiQuestionOrderByWithRelationInputObjectSchema).optional(),
  AiQuestionCheckbox: z.lazy(() => AiQuestionCheckboxOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AiQuestionsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AiQuestionsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsOrderByWithRelationInput>;
export const AiQuestionsOrderByWithRelationInputObjectZodSchema = makeSchema();
