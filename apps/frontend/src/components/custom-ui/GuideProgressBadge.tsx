import { GuideProgressStatus, GuideStatus } from 'database/enums';
import { Badge } from '@/components/ui/badge';
import { JSX, ReactNode } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function GuideProgressBadge({
  progressStatus,
  className,
  children,
}: {
  progressStatus: GuideProgressStatus | GuideStatus;
  className?: string;
  children?: ReactNode;
}) {
  let guideBadge: JSX.Element;

  switch (progressStatus) {
    case 'PENDING':
      guideBadge = (
        <Badge
          className={`${className} bg-gray-100 text-gray-700 dark:bg-gray-950 dark:text-gray-300`}
        >
          {progressStatus}
          {children && <div>{children}</div>}
        </Badge>
      );
      break;
    case 'INWORK':
      guideBadge = (
        <Badge
          className={`${className} bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300`}
        >
          {progressStatus}
          {children && <div>{children}</div>}
        </Badge>
      );
      break;
    case 'DONE':
      guideBadge = (
        <Badge
          className={`${className} bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300`}
        >
          {progressStatus}
          {children && <div>{children}</div>}
        </Badge>
      );
      break;
    case 'REJECTED':
      guideBadge = (
        <Badge
          className={`${className} bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300`}
        >
          {progressStatus}
          {children && <div>{children}</div>}
        </Badge>
      );
      break;
    default:
      guideBadge = (
        <Badge variant="destructive">
          {progressStatus}
          {children && <div>{children}</div>}
        </Badge>
      );
      break;
  }

  if (progressStatus === 'FAILED') {
    return guideBadge;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{guideBadge}</TooltipTrigger>
      <TooltipContent>
        <p>Progress status</p>
      </TooltipContent>
    </Tooltip>
  );
}
