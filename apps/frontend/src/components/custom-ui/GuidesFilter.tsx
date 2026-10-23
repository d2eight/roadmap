'use client';

import { GuidesFilterComponent } from '@/components/custom-ui/GuidesFilterComponent';
import { ResetFiltersButton } from '@/components/custom-ui/ResetFiltersButton';
import { OpenFiltersButton } from '@/components/custom-ui/OpenFiltersButton';
import { useEffect, useRef, useState } from 'react';
import { DialogContextProvider } from '@/context/DialogContext';
import { CreateGuideButton } from '@/components/custom-ui/CreateGuideButton';
import { useWindowWidth } from '@/utils/useWindowWidth';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useWindowScroll } from '@/utils/useWindowScroll';

export default function GuidesFilter() {
  const { isDesktop } = useWindowWidth();
  const { scrollY } = useWindowScroll();
  const [accordionValue, setAccordionValue] = useState<['item-1'] | []>([
    'item-1',
  ]);
  const [isManuallyControlled, setIsManuallyControlled] =
    useState<boolean>(false);

  useEffect(() => {
    if (isManuallyControlled) return;

    if (scrollY > 300) {
      setAccordionValue([]);
    } else if (scrollY < 50) {
      setAccordionValue(['item-1']);
    }
  }, [scrollY, isManuallyControlled]);

  const toggleAccordion = () => {
    setIsManuallyControlled(true);
    setAccordionValue((prev) => (prev.length ? [] : ['item-1']));
  };

  if (isDesktop) {
    return (
      <div className="hidden xl:block sticky top-20 shadow-md bg-white rounded-4xl">
        <Accordion
          className="border-none rounded-none"
          type="multiple"
          value={accordionValue}
        >
          <AccordionItem className="data-open:bg-transparent " value="item-1">
            <AccordionContent className="pb-[0]">
              <GuidesFilterComponent />
            </AccordionContent>
            <AccordionTrigger
              onClick={toggleAccordion}
              className="justify-center items-center **:data-[slot=accordion-trigger-icon]:ml-0! gap-2.5"
            >
              <p>{accordionValue.length ? 'Close filters' : 'Open filters'}</p>
            </AccordionTrigger>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }

  return (
    <div className="xl:hidden flex items-center justify-between gap-3">
      <div className="w-full flex items-center gap-3">
        <DialogContextProvider>
          <OpenFiltersButton />
        </DialogContextProvider>
        <ResetFiltersButton />
      </div>
      <div>
        <DialogContextProvider>
          <CreateGuideButton pushToGuideStatus={false} />
        </DialogContextProvider>
      </div>
    </div>
  );
}
