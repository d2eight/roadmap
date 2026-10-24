import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema';
import { EnumGuideStepStatusFieldUpdateOperationsInputObjectSchema as EnumGuideStepStatusFieldUpdateOperationsInputObjectSchema } from './EnumGuideStepStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

const makeSchema = () =>
    z
        .object({
            id: z
                .union([
                    z.number().int(),
                    z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            title: z
                .union([
                    z.string(),
                    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            description: z
                .union([
                    z.string(),
                    z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
                ])
                .optional(),
            status: z
                .union([
                    GuideStepStatusSchema,
                    z.lazy(
                        () =>
                            EnumGuideStepStatusFieldUpdateOperationsInputObjectSchema,
                    ),
                ])
                .optional(),
            createdAt: z
                .union([
                    z.coerce.date(),
                    z.lazy(
                        () => DateTimeFieldUpdateOperationsInputObjectSchema,
                    ),
                ])
                .optional(),
            updatedAt: z
                .union([
                    z.coerce.date(),
                    z.lazy(
                        () => DateTimeFieldUpdateOperationsInputObjectSchema,
                    ),
                ])
                .optional(),
        })
        .strict();
export const GuideStepUncheckedUpdateWithoutGuideInputObjectSchema: z.ZodType<Prisma.GuideStepUncheckedUpdateWithoutGuideInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepUncheckedUpdateWithoutGuideInput>;
export const GuideStepUncheckedUpdateWithoutGuideInputObjectZodSchema =
    makeSchema();
