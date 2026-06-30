import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { EnumGuideStatusFieldUpdateOperationsInputObjectSchema as EnumGuideStatusFieldUpdateOperationsInputObjectSchema } from './EnumGuideStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutGuidesNestedInputObjectSchema as UserUpdateOneRequiredWithoutGuidesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutGuidesNestedInput.schema';
import { AiQuestionsUpdateOneWithoutGuideNestedInputObjectSchema as AiQuestionsUpdateOneWithoutGuideNestedInputObjectSchema } from './AiQuestionsUpdateOneWithoutGuideNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  prompt: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  externalAiQuestionsStatus: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([GuideStatusSchema, z.lazy(() => EnumGuideStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutGuidesNestedInputObjectSchema).optional(),
  questions: z.lazy(() => AiQuestionsUpdateOneWithoutGuideNestedInputObjectSchema).optional()
}).strict();
export const GuideUpdateWithoutStepsInputObjectSchema: z.ZodType<Prisma.GuideUpdateWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUpdateWithoutStepsInput>;
export const GuideUpdateWithoutStepsInputObjectZodSchema = makeSchema();
