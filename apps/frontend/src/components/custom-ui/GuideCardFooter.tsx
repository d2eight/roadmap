'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Spinner } from '@/components/ui/spinner';
import { ArrowRight, LucideRefreshCcw } from 'lucide-react';
import { useGuideContext } from '@/context/GuideContext';
import { CardFooter } from '@/components/ui/card';
import { RecreateGuideMenu } from '@/components/custom-ui/RecreateGuideMenu';

export function GuideCardFooter() {
    const { guide, status } = useGuideContext();

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
        default: {
            const icon = <LucideRefreshCcw />;
            return (
                <CardFooter className="cursor-pointer">
                    <Button variant="destructive" asChild>
                        <div className="w-full">
                            <RecreateGuideMenu
                                icon={icon}
                                className="flex items-center gap-2 w-full justify-center"
                            >
                                Try again
                            </RecreateGuideMenu>
                        </div>
                    </Button>
                </CardFooter>
            );
        }
    }
}
