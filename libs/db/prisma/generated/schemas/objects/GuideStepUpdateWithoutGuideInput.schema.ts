import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { GuideStepStatusSchema } from '../enums/GuideStepStatus.schema';
import { EnumGuideStepStatusFieldUpdateOperationsInputObjectSchema as EnumGuideStepStatusFieldUpdateOperationsInputObjectSchema } from './EnumGuideStepStatusFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

const makeSchema = () =>
    z
        .object({
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
export const GuideStepUpdateWithoutGuideInputObjectSchema: z.ZodType<Prisma.GuideStepUpdateWithoutGuideInput> =
    makeSchema() as unknown as z.ZodType<Prisma.GuideStepUpdateWithoutGuideInput>;
export const GuideStepUpdateWithoutGuideInputObjectZodSchema = makeSchema();
