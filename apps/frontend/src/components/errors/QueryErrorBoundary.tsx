'use client'

import { ReactNode } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import {
    Empty,
    EmptyContent,
    EmptyDescription, EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from '../ui/empty';
import { LucideCloudAlert, LucideRefreshCcw } from 'lucide-react';
import { Button } from '../ui/button';

export function QueryErrorBoundary({ children }: { children: ReactNode }) {
    return (
        <QueryErrorResetBoundary>
            {({ reset }) => (
                <ErrorBoundary
                    onReset={reset}
                    onError={(error) => console.error(error)}
                    fallbackRender={({ resetErrorBoundary }) => {
                        return (
                            <Empty>
                                <EmptyHeader className="gap-0">
                                    <EmptyMedia>
                                        <LucideCloudAlert color="red" />
                                    </EmptyMedia>
                                    <EmptyTitle>Server error</EmptyTitle>
                                    <EmptyDescription>
                                        Cant reach requested data
                                    </EmptyDescription>
                                </EmptyHeader>
                                <EmptyContent>
                                    <Button
                                        variant="outline"
                                        onClick={resetErrorBoundary}
                                    >
                                        Try again
                                        <LucideRefreshCcw />
                                    </Button>
                                </EmptyContent>
                            </Empty>
                        );
                    }}
                >
                    {children}
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    );
}
