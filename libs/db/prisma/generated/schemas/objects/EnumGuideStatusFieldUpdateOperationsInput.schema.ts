import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { GuideStatusSchema } from '../enums/GuideStatus.schema'

const makeSchema = () => z.object({
  set: GuideStatusSchema.optional()
}).strict();
export const EnumGuideStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumGuideStatusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumGuideStatusFieldUpdateOperationsInput>;
export const EnumGuideStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
