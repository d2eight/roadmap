'use client';

import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { MessageCircleQuestionMark } from 'lucide-react';

export function QuestionsCount({ questionsCount }: { questionsCount: number }) {
    return (
        <Tooltip>
            <TooltipTrigger>
                <div className="flex w-full justify-between">
                    <div className="flex items-center gap-1">
                        <MessageCircleQuestionMark size="18" />
                        {questionsCount} questions
                    </div>
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p>{`Answer ${questionsCount} questions, to create a guide`}</p>
            </TooltipContent>
        </Tooltip>
    );
}
