import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/browser';
import { GuideProgressStatusSchema } from '../enums/GuideProgressStatus.schema'

const makeSchema = () => z.object({
  set: GuideProgressStatusSchema.optional()
}).strict();
export const EnumGuideProgressStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumGuideProgressStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumGuideProgressStatusFieldUpdateOperationsInput>;
export const EnumGuideProgressStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
