import express from 'express';
import { promptSchema, promptSchemaType } from 'shared-types';
import { z } from 'zod';

export function promptValidationMiddleware({
    errorMessage = 'Guide was not created, invalid data',
}: {
    errorMessage?: string;
}) {
    return (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        const promptData: promptSchemaType = req.body;
        try {
            res.locals.promptData = promptSchema.parse(promptData);
            next();
        } catch (error) {
            if (error instanceof z.ZodError) {
                return res.status(422).json({
                    success: false,
                    message: errorMessage,
                    zodError: z.flattenError(error),
                });
            }
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
}
