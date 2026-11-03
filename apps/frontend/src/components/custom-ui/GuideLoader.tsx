import { Skeleton } from '../ui/skeleton';
import { SkeletonBasic } from './SkeletonBasic';

export function GuideLoader() {
    return (
        <div className="flex flex-col gap-5">
            <Skeleton className="h-43 w-full" />
            <SkeletonBasic />
            <SkeletonBasic />
        </div>
    );
}
