import { Skeleton } from '../ui/skeleton';

export function SummaryLoader() {
    return (
        <div className="pt-4 w-full flex flex-col gap-5">
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
            <Skeleton className="w-full h-7" />
        </div>
    );
}
