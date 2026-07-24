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
import { ArrowRight, LucideNotebookPen, MessageCircleQuestionMark, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { Spinner } from '../ui/spinner';
import { useMutation } from '@tanstack/react-query';
import { ApiError } from '../../customClasses/apiError';
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

export function GuideCard() {
  const { guide, completedSteps } = useContext(GuideContext);
  const { guides, setGuides, setGuidesCount } = useContext(GuidesContext);
  const {data} = useContext(AuthContext)
  // const { updatePagination, currentPage } = useContext(PaginationContext);
  const searchParams = useSearchParams();
  const currentPage = searchParams.get('page') ?? '1';


  let cardTitle = guide.prompt;
  let cardDescription = 'Here will be guide description';
  let cardContent;
  let cardFooter: JSX.Element = <></>;

  switch (guide.status) {
    case 'INIT':
    case 'GUIDE_GENERATION':
      cardFooter = (
        <Button className="w-full" variant="secondary" asChild>
          <Link href={`/guides/${guide.id}`}>
            Generating a guide
            <Spinner />
          </Link>
        </Button>
      );
      cardContent = (
        <div className="flex items-center gap-2">
          <p className="shimmer text-sm text-muted-foreground">
            Please wait&hellip;
          </p>
        </div>
      );
      break;
    case 'QUESTIONS_GENERATION':
      cardFooter = (
        <Button className="w-full" variant="secondary" asChild>
          <Link href={`/guides/${guide.id}`}>
            Generating questions
            <Spinner />
          </Link>
        </Button>
      );
      cardContent = (
        <div className="flex items-center gap-2">
          <p className="shimmer text-sm text-muted-foreground">
            Please wait&hellip;
          </p>
        </div>
      );
      break;
    case 'QUESTIONS_GENERATED':
      cardDescription = 'Answer generated questions';
      cardFooter = (
        <div className="flex items-center gap-2">
          <p>Waiting for you answers</p>
          <MessageCircleQuestionMark />
        </div>
      );
      break;
    case 'GUIDE_GENERATED':
      cardTitle = guide.title;
      cardDescription = guide.description;
      cardContent = (
        <div className="flex items-center justify-between gap-2">
          <CompletedSteps
            guideLength={guide.steps.length}
            completedSteps={completedSteps}
          />
          <GuideDate guideDate={guide.createdAt} />
        </div>
      );
      cardFooter = (
        <Button className="w-full" asChild>
          <Link href={`/guides/${guide.id}`}>
            Open guide
            <ArrowRight />
          </Link>
        </Button>
      );
      break;
  }

  const { mutate } = useMutation({
    mutationFn: removeGuide,
    onSuccess: async (response) => {
      const [guides, guidesCount] = await getGuidesInPagination({
        currentPage: parseInt(currentPage),
        pageSize: 9,
        userId: data!.user.id,
      });

      setGuides(guides);
      setGuidesCount(guidesCount);
    },
  });

  async function removeGuide() {
    const response = await fetch(
      `http://localhost:3333/api/remove-guide/${guide.id}`,
      {
        method: 'DELETE',
        credentials: 'include',
      },
    );

    const body = await response.json();

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
      <CardHeader>
        <CardTitle className="truncate">{cardTitle}</CardTitle>
        <CardDescription className="truncate">
          {cardDescription}
        </CardDescription>
        <CardAction>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="cursor-pointer"
                variant="destructive"
                size="icon-sm"
              >
                <Trash2 />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure that you want to delete this guide?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => mutate()}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardAction>
      </CardHeader>
      <CardContent>
        {cardContent}
      </CardContent>
      <CardFooter>{cardFooter}</CardFooter>
    </Card>
  );
}
