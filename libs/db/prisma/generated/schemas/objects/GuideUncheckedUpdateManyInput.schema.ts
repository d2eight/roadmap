import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { GuideStatusSchema } from '../enums/GuideStatus.schema';
import { EnumGuideStatusFieldUpdateOperationsInputObjectSchema as EnumGuideStatusFieldUpdateOperationsInputObjectSchema } from './EnumGuideStatusFieldUpdateOperationsInput.schema';
import { GuideProgressStatusSchema } from '../enums/GuideProgressStatus.schema';
import { EnumGuideProgressStatusFieldUpdateOperationsInputObjectSchema as EnumGuideProgressStatusFieldUpdateOperationsInputObjectSchema } from './EnumGuideProgressStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  prompt: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  questions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  answeredQuestions: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  externalAiQuestionsStatus: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  status: z.union([GuideStatusSchema, z.lazy(() => EnumGuideStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  progressStatus: z.union([GuideProgressStatusSchema, z.lazy(() => EnumGuideProgressStatusFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const GuideUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.GuideUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GuideUncheckedUpdateManyInput>;
export const GuideUncheckedUpdateManyInputObjectZodSchema = makeSchema();
