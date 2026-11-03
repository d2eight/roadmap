import { useGuideContext } from '../../context/GuideContext';
import { CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { CompletedSteps } from './CompletedSteps';
import { GuideDate } from './GuideDate';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

import { DeleteGuideButton } from './DeleteGuideButton';

import { RecreateGuideMenu } from './RecreateGuideMenu';
import { UpdateProgressButton } from './UpdateProgressButton';

export function GuideHeader() {
    const { guide, completedSteps, stepsCount, status } = useGuideContext();

    return (
        status === 'GUIDE_GENERATED' && (
            <>
                <CardHeader className="xl:px-0">
                    <CardTitle className="flex flex-row justify-between items-center ">
                        <h1>{guide.title}</h1>
                    </CardTitle>
                    <CardAction className="flex items-center gap-2">
                        <UpdateProgressButton
                            variant="outline"
                            className="hidden xl:flex"
                        />
                        <DeleteGuideButton redirect={true} />
                        <RecreateGuideMenu />
                    </CardAction>
                </CardHeader>
                <CardContent className="xl:px-0 flex flex-row items-center gap-[10px]">
                    <CompletedSteps
                        stepsCount={stepsCount}
                        completedSteps={completedSteps}
                    />
                    <GuideDate guideDate={guide.createdAt} />
                </CardContent>
                <CardFooter className="xl:px-0">
                    <Accordion
                        className="border-none rounded-none"
                        type="multiple"
                        defaultValue={[]}
                    >
                        <AccordionItem
                            className="data-open:bg-transparent"
                            value="item-1"
                        >
                            <AccordionTrigger className="p-0 justify-center items-center **:data-[slot=accordion-trigger-icon]:ml-0! gap-2.5">
                                <p>See description</p>
                            </AccordionTrigger>
                            <AccordionContent className="pt-[20px] pb-[0]">
                                {guide.description}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardFooter>
            </>
        )
    );
}
