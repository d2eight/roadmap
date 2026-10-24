import { ConnectionOptions } from 'bullmq';
import { env } from 'env';

export const redisConnectionConfig: ConnectionOptions = {
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
};
