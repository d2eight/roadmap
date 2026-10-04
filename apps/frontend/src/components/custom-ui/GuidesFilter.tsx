'use client';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  LucideCalendarDays,
  LucideCheck,
  LucidePlus,
  Trash2,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PromptForm } from '@/components/forms/PromptForm';
import {
  FormProcessingContext,
  FormProcessor,
} from '@/components/wrappers/FormProcessor';
import { Button } from '@/components/ui/button';
import { CreateGuideButton } from '@/components/custom-ui/CreateGuideButton';
import { useContext, useEffect, useState } from 'react';
import { GuidesContext } from '@/context/GuidesContext';
import { useForm } from 'react-hook-form';
import { FilterForm } from '@/components/forms/FilterForm';
import { ApplyFiltersButton } from '@/components/custom-ui/ApplyFiltersButton';
import { useSearchParams } from 'next/navigation';
import { DialogContextProvider } from '@/context/DialogContext';

export function GuidesFilter() {
  const { setProcessingStatus } = useContext(FormProcessingContext);

  useEffect(() => {
    setProcessingStatus(false);
  });

  return (
    <div className="sticky top-[50px] z-50">
      <Card>
        <CardHeader>
          <CardTitle>
            <FilterForm />
          </CardTitle>
          <CardAction className="flex flex-row gap-[10px]">
            <ApplyFiltersButton />
            <DialogContextProvider>
              <CreateGuideButton pushToGuideStatus={false} />
            </DialogContextProvider>
          </CardAction>
        </CardHeader>
      </Card>
    </div>
  );
}
