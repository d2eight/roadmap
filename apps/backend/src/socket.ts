import { Server } from 'socket.io';
import { server } from '@/apps/backend/src/main';
import { auth } from 'auth';
import { fromNodeHeaders } from 'better-auth/node';

let io = null;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: 'http://localhost:4444',
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
