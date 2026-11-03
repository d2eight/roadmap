import { Skeleton } from '../ui/skeleton';

export function CurrentGuideLoader() {
    return (
        <div className="flex flex-col justify-between h-full">
            <Skeleton className="h-12.5 w-full" />
            <Skeleton className="h-28.25 w-full rounded-2xl" />
            <Skeleton className="h-9 w-full rounded-4xl" />
        </div>
    );
}
