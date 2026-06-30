import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AiQuestionABCDSelectObjectSchema as AiQuestionABCDSelectObjectSchema } from './AiQuestionABCDSelect.schema';
import { AiQuestionABCDIncludeObjectSchema as AiQuestionABCDIncludeObjectSchema } from './AiQuestionABCDInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AiQuestionABCDSelectObjectSchema).optional(),
  include: z.lazy(() => AiQuestionABCDIncludeObjectSchema).optional()
}).strict();
export const AiQuestionABCDArgsObjectSchema = makeSchema();
export const AiQuestionABCDArgsObjectZodSchema = makeSchema();
