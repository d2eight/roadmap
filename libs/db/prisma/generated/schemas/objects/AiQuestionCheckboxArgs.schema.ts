import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionCheckboxSelectObjectSchema as AiQuestionCheckboxSelectObjectSchema } from './AiQuestionCheckboxSelect.schema';
import { AiQuestionCheckboxIncludeObjectSchema as AiQuestionCheckboxIncludeObjectSchema } from './AiQuestionCheckboxInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AiQuestionCheckboxSelectObjectSchema).optional(),
  include: z.lazy(() => AiQuestionCheckboxIncludeObjectSchema).optional()
}).strict();
export const AiQuestionCheckboxArgsObjectSchema = makeSchema();
export const AiQuestionCheckboxArgsObjectZodSchema = makeSchema();
