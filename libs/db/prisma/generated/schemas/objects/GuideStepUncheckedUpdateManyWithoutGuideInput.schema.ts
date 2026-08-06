import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GuidStepStatusSchema } from '../enums/GuidStepStatus.schema';
import { EnumGuidStepStatusFieldUpdateOperationsInputObjectSchema as EnumGuidStepStatusFieldUpdateOperationsInputObjectSchema } from './EnumGuidStepStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([GuidStepStatusSchema, z.lazy(() => EnumGuidStepStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const GuideStepUncheckedUpdateManyWithoutGuideInputObjectSchema: z.ZodType<Prisma.GuideStepUncheckedUpdateManyWithoutGuideInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepUncheckedUpdateManyWithoutGuideInput>;
export const GuideStepUncheckedUpdateManyWithoutGuideInputObjectZodSchema = makeSchema();
