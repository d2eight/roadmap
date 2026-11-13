import express from 'express';
import cors from 'cors';

import { toNodeHandler } from 'better-auth/node';
import { auth } from 'auth';
import { guidesRouter } from './features/guides/guides.routes';
import initWorkers from './workers/workers';
import { createServer } from 'node:http';
import { initSocket } from './socket';
import { env } from 'env';

export const app = express();
export const server = createServer(app);
initSocket(server);

app.use(
    cors({
        origin: env.NEXT_URL,
        credentials: true,
    }),
);

app.all('/api/auth/*any', toNodeHandler(auth));
app.use(express.json());
app.use(guidesRouter);
app.use((req, res, next) => {
    return res.status(404).json({
        success: false,
        message: 'There is no such a resource',
    });
});
app.use(
    (
        err: unknown,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
    ) => {
        if (err instanceof SyntaxError && 'body' in err) {
            return res.status(400).json({
                success: false,
                message: 'Invalid JSON',
            });
        } else {
            console.error(err)
            return res.status(500).json({
                success: false,
                message: 'Something went wrong, unexpected behaviour',
            });
        }
    },
);

const port = 3333;

server.listen(port, () => {
    initWorkers();
});

server.on('error', console.error);
