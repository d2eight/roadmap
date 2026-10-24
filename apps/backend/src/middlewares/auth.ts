import { auth } from 'auth';
import express from 'express';
import { fromNodeHeaders } from 'better-auth/node';

export function authMiddleware({
    errorMessage = 'Unauthorized user, please sign in',
}: {
    errorMessage?: string;
}) {
    return async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(req.headers),
        });

        if (!session) {
            return res.status(401).json({
                success: false,
                message: errorMessage,
            });
        }

        res.locals.userId = session.user.id;

        next();
    };
}
