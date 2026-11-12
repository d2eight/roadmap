import express from 'express';
import { GuideStatus } from 'database';
import { getGuide } from 'utils';

export function guideMiddleware({
    errorMessage = 'Such a guide does not exists',
    requiredStatuses = [],
}: {
    errorMessage?: string;
    requiredStatuses?: GuideStatus[];
}) {
    return async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        const userId: string = res.locals.userId;
        const guideId = req.params.guideId as string;

        try {
            const guide = await getGuide({userId, guideId});

            if(!guide) {
                return res.status(404).json({
                    success: false,
                    message: errorMessage,
                });
            }

            if(requiredStatuses.length > 0 && !requiredStatuses.includes(guide.status)) {
                return res.status(409).json({
                    success: false,
                    message: 'Guide status doesn\'t match!',
                });
            }

            res.locals.prompt = guide.prompt;
            next();
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: 'Somthing wen wrong',
            });
        }
    };
}
