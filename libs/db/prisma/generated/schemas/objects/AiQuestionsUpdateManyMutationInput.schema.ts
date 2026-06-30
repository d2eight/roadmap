import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const AiQuestionsUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.AiQuestionsUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiQuestionsUpdateManyMutationInput>;
export const AiQuestionsUpdateManyMutationInputObjectZodSchema = makeSchema();
