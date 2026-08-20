'use client'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LucideCalendarDays, LucidePlus, Trash2 } from 'lucide-react';
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
import { PromptForm } from '@/components/forms/promptForm';
import { FormProcessor } from '@/components/wrappers/FormProcessor';
import { Button } from '@/components/ui/button';
import { CreateGuideButton } from '@/components/custom-ui/CreateGuideButton';
import { useContext } from 'react';
import { GuidesContext } from '@/context/GuidesContext';
import { useForm } from 'react-hook-form';
import { FilterForm } from '@/components/forms/FilterForm';


export function GuidesFilter() {
  const { guides } = useContext(GuidesContext);

  return (
    <div className="sticky top-[50px] z-50">
      <Card>
        <CardHeader>
          <CardTitle>
            <FilterForm />
          </CardTitle>
          <CardAction className="flex flex-row gap-[10px]">
            <CreateGuideButton />
            <CreateGuideButton />
          </CardAction>
        </CardHeader>
        {/*<CardContent>*/}
        {/*  <p>Sort by</p>*/}
        {/*</CardContent>*/}
      </Card>
    </div>
  );
}

