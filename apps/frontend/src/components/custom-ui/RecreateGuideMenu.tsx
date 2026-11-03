import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { LucideEllipsisVertical } from 'lucide-react';
import { RecreateGuideButton } from './RecreateGuideButton';
import { RecreateGuideWithAnsweredQuestionsButton } from './RecreateGuideWithAnsweredQuestionsButton';
import { ChangeGuidePromptButton } from './ChangeGuidePromptButton';
import { ReactNode } from 'react';
import { useGuideContext } from '../../context/GuideContext';
import { RecreateGuideQuestionsButton } from './RecreateGuideQuestionsButton';

export function RecreateGuideMenu({
    children,
    className,
    icon,
}: {
    className?: string;
    children?: ReactNode;
    icon?: ReactNode;
}) {
    const { guide } = useGuideContext();
    return (
        <Tooltip>
            <DropdownMenu modal={false}>
                <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                        <div className={className}>
                            {children && <span>{children}</span>}
                            <Button size="icon-sm" variant="outline">
                                {icon ?? <LucideEllipsisVertical />}
                            </Button>
                        </div>
                    </DropdownMenuTrigger>
                </TooltipTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        asChild
                    >
                        <RecreateGuideButton className="cursor-pointer w-full flex flex-row items-center gap-2 hover:bg-muted">
                            Simple recreate
                        </RecreateGuideButton>
                    </DropdownMenuItem>
                    {guide.externalAiQuestionsStatus && (
                        <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                            asChild
                        >
                            <RecreateGuideQuestionsButton className="cursor-pointer w-full flex flex-row items-center gap-2 hover:bg-muted">
                                Change questions
                            </RecreateGuideQuestionsButton>
                        </DropdownMenuItem>
                    )}
                    {guide.questions && (
                        <DropdownMenuItem
                            onSelect={(e) => e.preventDefault()}
                            asChild
                        >
                            <RecreateGuideWithAnsweredQuestionsButton className="cursor-pointer w-full flex flex-row items-center gap-2 hover:bg-muted">
                                Change answers
                            </RecreateGuideWithAnsweredQuestionsButton>
                        </DropdownMenuItem>
                    )}
                    <DropdownMenuItem
                        onSelect={(e) => e.preventDefault()}
                        asChild
                    >
                        <ChangeGuidePromptButton className="cursor-pointer w-full flex flex-row items-center gap-2 hover:bg-muted">
                            Change prompt
                        </ChangeGuidePromptButton>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <TooltipContent>Recreate Options</TooltipContent>
        </Tooltip>
    );
}
