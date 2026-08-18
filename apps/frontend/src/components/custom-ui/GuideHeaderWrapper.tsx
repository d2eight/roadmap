'use client'

import { ReactNode } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export function GuideHeaderWrapper({children}: {children: ReactNode}) {
  return (
    <Card className="pl-[50px] pr-[20px] mb-[20px] sticky top-[50px] z-50">
      {children}
    </Card>
  );
}
