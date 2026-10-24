import { Server } from 'socket.io';
import { auth } from 'auth';
import { fromNodeHeaders } from 'better-auth/node';
import { env } from 'env';

let io = null;

export const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: env.NEXT_URL,
            credentials: true,
        },
    });

    io.use(async (socket, next) => {
        const session = await auth.api.getSession({
            headers: fromNodeHeaders(socket.request.headers),
        });

        if (!session) {
            return next(new Error('No such session'));
        }

        socket.data.id = session.user.id;
        next();
    });

    io.on('connection', (socket) => {
        socket.join(socket.data.id);
    });

    return io;
};

export const getIO = () => {
    if (!io) {
        throw new Error();
    }
    return io;
};
