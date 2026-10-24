import express from 'express';
import {
    answeredQuestionsSchema,
    answeredQuestionsSchemaType,
} from 'shared-types';
import { z } from 'zod';

export function questionsValidationMiddleware({
    errorMessage = 'Invalid questions or answers data',
}: {
    errorMessage?: string;
}) {
    return (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        const answeredQuestions: answeredQuestionsSchemaType = req.body;

        try {
            res.locals.answeredQuestions =
                answeredQuestionsSchema.parse(answeredQuestions);
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
