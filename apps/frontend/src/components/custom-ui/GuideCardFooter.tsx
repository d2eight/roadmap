import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Spinner } from '@/components/ui/spinner';
import { ArrowRight, MessageCircleQuestionMark } from 'lucide-react';
import { CompletedSteps } from '@/components/custom-ui/CompletedSteps';
import { GuideDate } from '@/components/custom-ui/GuideDate';
import { useContext } from 'react';
import { GuideContext } from '@/context/GuideContext';
import { CardFooter } from '@/components/ui/card';

export function GuideCardFooter() {
  const {guide, status} = useContext(GuideContext);

  switch (status) {
    case 'INIT':
    case 'GUIDE_GENERATION':
      return (
        <CardFooter>
          <Button className="w-full" variant="secondary" asChild>
            <Link href={`/guides/${guide.id}`}>
              Generating a guide
              <Spinner />
            </Link>
          </Button>
        </CardFooter>
      );
    case 'QUESTIONS_GENERATION':
      return (
        <CardFooter>
          <Button className="w-full" variant="secondary" asChild>
            <Link href={`/guides/${guide.id}`}>
              Generating questions
              <Spinner />
            </Link>
          </Button>
        </CardFooter>
      );
    case 'QUESTIONS_GENERATED':
      return (
        <CardFooter>
          <Button className="w-full" variant="outline" asChild>
            <Link href={`/guides/${guide.id}`}>
              Open questions
              <ArrowRight />
            </Link>
          </Button>
        </CardFooter>
      );
    case 'GUIDE_GENERATED':
      return (
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href={`/guides/${guide.id}`}>
              Open guide
              <ArrowRight />
            </Link>
          </Button>
        </CardFooter>
      );
  }



}
