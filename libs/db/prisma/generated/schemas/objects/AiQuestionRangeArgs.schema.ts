import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionRangeSelectObjectSchema as AiQuestionRangeSelectObjectSchema } from './AiQuestionRangeSelect.schema';
import { AiQuestionRangeIncludeObjectSchema as AiQuestionRangeIncludeObjectSchema } from './AiQuestionRangeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AiQuestionRangeSelectObjectSchema).optional(),
  include: z.lazy(() => AiQuestionRangeIncludeObjectSchema).optional()
}).strict();
export const AiQuestionRangeArgsObjectSchema = makeSchema();
export const AiQuestionRangeArgsObjectZodSchema = makeSchema();
