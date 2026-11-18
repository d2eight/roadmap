import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema'

const makeSchema = () => z.object({
  set: GuideStepStatusSchema.optional()
}).strict();
export const EnumGuideStepStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumGuideStepStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumGuideStepStatusFieldUpdateOperationsInput>;
export const EnumGuideStepStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
