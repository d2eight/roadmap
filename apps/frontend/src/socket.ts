import { io, Socket } from 'socket.io-client';
import { clientEnv } from 'env/client';

let socket: Socket | null = null;

export function getSocket() {
    if (!socket) {
        socket = io(clientEnv.EXPRESS_URL, {
            withCredentials: true,
            autoConnect: false,
        });
    }

    return socket;
}
