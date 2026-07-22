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
import { MessageCircleQuestionMark, Trash2 } from 'lucide-react';
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
import { GuidesContext } from '@/context/GuidesContext';

export function GuideCard() {
  const guide = useContext(GuideContext);
  const { guides, setGuides } = useContext(GuidesContext);

  let cardTitle = guide.prompt;
  let cardDescription = 'Here will be guide description';
  let cardFooter: JSX.Element = <></>;

  switch (guide.status) {
    case 'INIT':
    case 'QUESTIONS_GENERATION':
    case 'GUIDE_GENERATION':
      cardFooter = (
        <div className="flex items-center gap-2">
          <p className="shimmer text-sm text-muted-foreground">
            Generating response&hellip;
          </p>
          <Spinner />
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
      break;
  }

  const { mutate } = useMutation({
    mutationFn: removeGuide,
    onSuccess: (response) => {
      const removedGuideId = response.data;
      const newGuidesArray = guides.filter((item) => item.id !== removedGuideId);
      setGuides(newGuidesArray);
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
    <Card>
      <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
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
      <CardFooter>{cardFooter}</CardFooter>
    </Card>
  );
}
