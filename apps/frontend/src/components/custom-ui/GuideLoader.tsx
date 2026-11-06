import { Skeleton } from '../ui/skeleton';

export function GuideLoader() {
    return (
        <div className="flex flex-col gap-6">
            <Skeleton className="h-43 w-full" />
            <Skeleton className="h-26 w-full" />
            <Skeleton className="h-26 w-full" />
            <Skeleton className="h-26 w-full" />
            <Skeleton className="h-26 w-full" />
        </div>
    );
}
