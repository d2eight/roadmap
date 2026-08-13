'use client';

import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Spinner } from '@/components/ui/spinner';
import { ArrowRight, MessageCircleQuestionMark } from 'lucide-react';
import { CompletedSteps } from '@/components/custom-ui/CompletedSteps';
import { GuideDate } from '@/components/custom-ui/GuideDate';
import { CardTitle } from '@/components/ui/card';

export function GuideCardTitle() {
  const { guide } = useContext(GuideContext);

  switch (guide.status) {
    case 'INIT':
    case 'GUIDE_GENERATION':
    case 'QUESTIONS_GENERATION':
    case 'QUESTIONS_GENERATED':
      return <CardTitle className="truncate">{guide.prompt}</CardTitle>;
    case 'GUIDE_GENERATED':
      return <CardTitle className="truncate">{guide.title}</CardTitle>;
  }
}
