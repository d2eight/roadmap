'use client';

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { Button } from '../ui/button';
import { LucidePlus } from 'lucide-react';
import { FormProcessor } from '../../context/FormProcessor';
import { PromptForm } from '../forms/PromptForm';
import { JSX } from 'react';
import { CreateGuidePromptFormButton } from './CreateGuidePromptFormButton';
import { toggleExplanationString } from '../../constants/constants';

export function CreateGuideButton({
    button,
    pushToGuideStatus,
}: {
    button?: JSX.Element;
    pushToGuideStatus: boolean;
}) {
    if (!button) {
        button = (
            <Button className="cursor-pointer" size="icon-lg">
                <LucidePlus />
            </Button>
        );
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <Tooltip>
                        <TooltipTrigger asChild>{button}</TooltipTrigger>
                        <TooltipContent>
                            <p>Create new guide</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </DialogTrigger>
            <DialogContent className="modal-container!">
                <DialogHeader>
                    <FormProcessor className="h-full">
                        <div className="h-full flex flex-col">
                            <DialogTitle>Guide creation</DialogTitle>
                            <DialogDescription>
                                Fill the inputs below:
                            </DialogDescription>
                            <div className="mt-5">
                                <PromptForm
                                    pushToGuideStatus={pushToGuideStatus}
                                />
                            </div>
                            <div className="mt-auto flex flex-col gap-5">
                                <p>{toggleExplanationString}</p>
                                <DialogClose asChild>
                                    <span>
                                        <CreateGuidePromptFormButton className="w-full" />
                                    </span>
                                </DialogClose>
                            </div>
                        </div>
                    </FormProcessor>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
