import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema';
import { EnumGuideStepStatusFieldUpdateOperationsInputObjectSchema as EnumGuideStepStatusFieldUpdateOperationsInputObjectSchema } from './EnumGuideStepStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([GuideStepStatusSchema, z.lazy(() => EnumGuideStepStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const GuideStepUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.GuideStepUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideStepUpdateManyMutationInput>;
export const GuideStepUpdateManyMutationInputObjectZodSchema = makeSchema();
