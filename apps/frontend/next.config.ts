import type { NextConfig } from 'next';
import { clientEnv } from 'env/client';

const nextConfig: NextConfig = {
    env: clientEnv,
};

export default nextConfig;
