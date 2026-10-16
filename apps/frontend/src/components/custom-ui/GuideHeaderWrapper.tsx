'use client';

import { ReactNode } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function GuideHeaderWrapper({ children }: { children: ReactNode }) {
  return (
    <Card className="pl-12.5 pr-5 mb-5 xl:sticky top-20 z-50">{children}</Card>
  );
}
