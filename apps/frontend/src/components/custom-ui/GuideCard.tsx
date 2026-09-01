'use client';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { JSX, useContext } from 'react';
import { GuideContext } from '../../context/GuideContext';
import {
  ArrowRight,
  LucideNotebookPen,
  MessageCircleQuestionMark,
  Trash2,
} from 'lucide-react';
import Link from 'next/link';
import { Spinner } from '../ui/spinner';
import { useMutation } from '@tanstack/react-query';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { GuidesContext, GuidesContextProvider } from '@/context/GuidesContext';
import { CompletedSteps } from '@/components/custom-ui/CompletedSteps';
import { GuideDate } from '@/components/custom-ui/GuideDate';
import { getGuidesInPagination } from 'utils';
import { Guides } from '@/components/custom-ui/Guides';
import { GuidesPagination } from '@/components/custom-ui/GuidesPagination';
import { useSearchParams } from 'next/navigation';
import { AuthContext } from '@/context/AuthContext';
import { ApiError, paramsSchema } from 'shared-types';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { DeleteGuideButton } from '@/components/custom-ui/DeleteGuideButton';
import { GuideCardTitle } from '@/components/custom-ui/GuideCardTitle';
import { GuideCardDescription } from '@/components/custom-ui/GuideCardDescription';
import { GuideCardAction } from '@/components/custom-ui/GuideCardAction';
import { GuideCardHeader } from '@/components/custom-ui/GuideCardHeader';
import { GuideCardContent } from '@/components/custom-ui/GuideCardContent';
import { GuideCardFooter } from '@/components/custom-ui/GuideCardFooter';
import { getDefaultSearchParams } from '@/utils/getDefaultSearchParams';

export function GuideCard() {
  const { guide } = useContext(GuideContext);
  const { guides, setGuides, setGuidesCount } = useContext(GuidesContext);
  const searchParams = useSearchParams();

  const { mutate } = useMutation({
    mutationFn: removeGuide,
    onSuccess: (response) => {
      const { data, newGuides } = response;

      if (newGuides) {
        setGuides(newGuides[0]);
        setGuidesCount(newGuides[1]);
      }
    },
  });

  async function removeGuide() {
    const parsedParams = paramsSchema.safeParse(searchParams);

    const params = parsedParams.success
      ? searchParams
      : getDefaultSearchParams({ searchParams });

    const response = await fetch(
      `http://localhost:3333/api/remove-guide/${guide.id}?${params}`,
      {
        method: 'DELETE',
        credentials: 'include',
      },
    );

    const body = await response.json();

    console.log(body);

    if (!response.ok && !body.success) {
      throw new ApiError(
        response.status,
        body.error.message ?? response.statusText,
      );
    }

    return body;
  }

  return (
    <Card className="flex flex-col justify-between">
      <GuideCardHeader mutate={mutate} />
      <GuideCardContent />
      <GuideCardFooter />
    </Card>
  );
}
