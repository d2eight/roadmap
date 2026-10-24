import { SkeletonBasic } from '@/components/custom-ui/SkeletonBasic';

export function GuideSkeleton({ prompt }: { prompt: string }) {
    function truncateText({
        string,
        length,
    }: {
        string: string;
        length: number;
    }) {
        if (string.length <= length) return string + '...';
        return string.slice(0, length) + '...';
    }

    return (
        <div className="flex flex-col items-center justify-center w-full gap-5">
            <SkeletonBasic />
            <p className="shimmer text-xl text-muted-foreground">
                Creating {truncateText({ string: prompt, length: 10 })}
            </p>
            <SkeletonBasic />
        </div>
    );
}
