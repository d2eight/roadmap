'use client';

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { SearchXIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { CreateGuideButton } from '@/components/custom-ui/CreateGuideButton';
import { useContext } from 'react';
import { FormProcessingContext } from '@/components/wrappers/FormProcessor';
import { DialogContextProvider } from '@/context/DialogContext';
import { ParamsContext } from '@/context/ParamsContext';
import Link from 'next/link';

export function GuideNotFound() {
  const { newSearchParams } = useContext(ParamsContext);

  const createGuideCustomButton = (
    <Button variant="outline">Create guide</Button>
  );

  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchXIcon />
        </EmptyMedia>
        <EmptyTitle>Not found</EmptyTitle>
        <EmptyDescription>
          {' '}
          Such a guide, does not exist.
          <br /> Create, a new guide, or go back to the dashboard page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex flex-row justify-center">
        <Button asChild>
          <Link href={`/guides?${newSearchParams}`}>Dashboard</Link>
        </Button>
        <DialogContextProvider>
          <CreateGuideButton
            button={createGuideCustomButton}
            pushToGuideStatus={true}
          />
        </DialogContextProvider>
      </EmptyContent>
    </Empty>
  );
}
