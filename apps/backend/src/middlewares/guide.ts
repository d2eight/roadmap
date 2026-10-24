import express from 'express';
import { prisma } from 'database';

export function guideMiddleware({
    errorMessage = 'Such a guide does not exists',
}: {
    errorMessage?: string;
}) {
    return async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        const userId: string = res.locals.userId;
        const guideId = req.params.guideId as string;

        try {
            const guide = await prisma.guide.findUniqueOrThrow({
                where: {
                    id: guideId,
                    userId: userId,
                },
            });
            res.locals.prompt = guide.prompt;
            next();
        } catch (error) {
            return res.status(404).json({
                success: false,
                message: errorMessage,
            });
        }
    };
}
