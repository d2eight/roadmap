import { Skeleton } from '@/components/ui/skeleton';
import { SkeletonBasic } from '@/components/custom-ui/SkeletonBasic';

export function GuidesLoader() {
  return (
    <div className="grid xl:grid-cols-3 xl:gap-10 grid-cols-1 auto-rows-[200px] gap-5">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  );
}
