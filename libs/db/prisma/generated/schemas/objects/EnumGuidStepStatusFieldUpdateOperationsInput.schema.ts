import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuidStepStatusSchema } from '../enums/GuidStepStatus.schema'

const makeSchema = () => z.object({
  set: GuidStepStatusSchema.optional()
}).strict();
export const EnumGuidStepStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumGuidStepStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumGuidStepStatusFieldUpdateOperationsInput>;
export const EnumGuidStepStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
