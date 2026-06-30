import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  guideId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AiQuestionsUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.AiQuestionsUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUncheckedUpdateManyInput>;
export const AiQuestionsUncheckedUpdateManyInputObjectZodSchema = makeSchema();
