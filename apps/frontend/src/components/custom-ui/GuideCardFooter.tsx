'use client';

import { Button, buttonVariants } from '../ui/button';
import Link from 'next/link';
import { Spinner } from '../ui/spinner';
import { ArrowRight, LucideRefreshCcw } from 'lucide-react';
import { useGuideContext } from '../../context/GuideContext';
import { CardFooter } from '../ui/card';
import { RecreateGuideMenu } from './RecreateGuideMenu';
import { useParamsContext } from '../../context/ParamsContext';
import { VariantProps } from 'class-variance-authority';

export function GuideCardFooter({
    className,
    label,
    variant,
}: {
    className?: string;
    label?: string;
    variant?: VariantProps<typeof buttonVariants>['variant'];
}) {
    const { guide, status } = useGuideContext();
    const { searchParams } = useParamsContext();

    switch (status) {
        case 'INIT':
        case 'GUIDE_GENERATION':
            return (
                <CardFooter className={`${className && className}`}>
                    <Button className="w-full" variant="secondary" asChild>
                        <Link href={`/guides/${guide.id}?${searchParams}`}>
                            Generating a guide
                            <Spinner />
                        </Link>
                    </Button>
                </CardFooter>
            );
        case 'QUESTIONS_GENERATION':
            return (
                <CardFooter className={`${className && className}`}>
                    <Button className="w-full" variant="secondary" asChild>
                        <Link href={`/guides/${guide.id}?${searchParams}`}>
                            Generating questions
                            <Spinner />
                        </Link>
                    </Button>
                </CardFooter>
            );
        case 'QUESTIONS_GENERATED':
            return (
                <CardFooter className={`${className && className}`}>
                    <Button className="w-full" variant="outline" asChild>
                        <Link href={`/guides/${guide.id}?${searchParams}`}>
                            Open questions
                            <ArrowRight />
                        </Link>
                    </Button>
                </CardFooter>
            );
        case 'GUIDE_GENERATED':
            return (
                <CardFooter className={`${className && className}`}>
                    <Button
                        className="w-full"
                        asChild
                        variant={variant ?? 'default'}
                    >
                        <Link href={`/guides/${guide.id}?${searchParams}`}>
                            {label ?? 'Open guide'}
                            <ArrowRight />
                        </Link>
                    </Button>
                </CardFooter>
            );
        default: {
            const icon = <LucideRefreshCcw />;
            return (
                <CardFooter
                    className={`${className && className} cursor-pointer`}
                >
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
