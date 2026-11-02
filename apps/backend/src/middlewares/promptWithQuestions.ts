import express from 'express';
import { guideQuestionsSchema, guideQuestionsSchemaType } from 'shared-types';
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
        const answeredQuestions: guideQuestionsSchemaType = req.body;

        try {
            res.locals.answeredQuestions =
                guideQuestionsSchema.parse(answeredQuestions);
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
