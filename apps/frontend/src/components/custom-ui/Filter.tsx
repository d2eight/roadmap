'use client';

import dynamic from 'next/dynamic';
import { Spinner } from '@/components/ui/spinner';
import { InfiniteProgress } from '@/components/custom-ui/InfiniteProgress';

export const Filter = dynamic(
    () => import('../../components/custom-ui/GuidesFilter'),
    {
        loading: () => (
            <div>
                <Spinner className="hidden xl:block size-20 m-auto h-62.5" />
                <InfiniteProgress className="xl:hidden h-10" />
            </div>
        ),
        ssr: false,
    },
);
