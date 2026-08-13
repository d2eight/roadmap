'use client';

import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Spinner } from '@/components/ui/spinner';
import { ArrowRight, MessageCircleQuestionMark } from 'lucide-react';
import { CompletedSteps } from '@/components/custom-ui/CompletedSteps';
import { GuideDate } from '@/components/custom-ui/GuideDate';
import { CardContent, CardTitle } from '@/components/ui/card';
import { QuestionsCount } from '@/components/custom-ui/QuestionsCount';

export function GuideCardContent() {
  const { guide, status, questionsCount, completedSteps } = useContext(GuideContext);

  switch (status) {
    case 'INIT':
    case 'GUIDE_GENERATION':
    case 'QUESTIONS_GENERATION':
      return (
        <CardContent>
          <div className="flex items-center gap-2">
            <p className="shimmer text-sm text-muted-foreground">
              Please wait&hellip;
            </p>
          </div>
        </CardContent>
      );
    case 'QUESTIONS_GENERATED':
      return (
        <CardContent>
          <QuestionsCount questionsCount={questionsCount} />
        </CardContent>
      );
    case 'GUIDE_GENERATED':
      return (
        <CardContent>
          <div className="flex items-center justify-between gap-2">
            <CompletedSteps
              guideLength={guide.steps.length}
              completedSteps={completedSteps}
            />
            <GuideDate guideDate={guide.createdAt} />
          </div>
        </CardContent>
      );
  }
}
