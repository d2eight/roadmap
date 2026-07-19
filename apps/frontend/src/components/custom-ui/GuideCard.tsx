'use client';

import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
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

export function GuideCard() {
  const guide = useContext(GuideContext);

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

  return (
    <Link href={`guides/${guide.id}`}>
      <Card>
        <CardHeader>
          <CardTitle>{cardTitle}</CardTitle>
          <CardDescription className="truncate">
            {cardDescription}
          </CardDescription>
          <CardAction>
            <Button variant="destructive">
              <Trash2 />
            </Button>
          </CardAction>
        </CardHeader>
        {/*<CardContent>123</CardContent>*/}
        <CardFooter>{cardFooter}</CardFooter>
      </Card>
    </Link>
  );
}
