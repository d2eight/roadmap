import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionSelectObjectSchema as AiQuestionSelectObjectSchema } from './AiQuestionSelect.schema';
import { AiQuestionIncludeObjectSchema as AiQuestionIncludeObjectSchema } from './AiQuestionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AiQuestionSelectObjectSchema).optional(),
  include: z.lazy(() => AiQuestionIncludeObjectSchema).optional()
}).strict();
export const AiQuestionArgsObjectSchema = makeSchema();
export const AiQuestionArgsObjectZodSchema = makeSchema();
