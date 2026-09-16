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
import { JSX, useContext } from 'react';
import { GuideContext } from '../../context/GuideContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { GuidesContext, GuidesContextProvider } from '@/context/GuidesContext';
import { useSearchParams } from 'next/navigation';
import { GuideCardHeader } from '@/components/custom-ui/GuideCardHeader';
import { GuideCardContent } from '@/components/custom-ui/GuideCardContent';
import { GuideCardFooter } from '@/components/custom-ui/GuideCardFooter';
import { searchParamsToObj } from 'utils/client';
import { ApiError, paramsSchema, QueryKeyType } from 'shared-types';
import { getDefaultSearchParams } from '@/utils/getDefaultSearchParams';
import { ParamsContext } from '@/context/ParamsContext';
import { getQueryClient } from '@/query/getQueryClient';

export function GuideCard() {
  return (
    <Card className="flex flex-col justify-between">
      <GuideCardHeader />
      <GuideCardContent />
      <GuideCardFooter />
    </Card>
  );
}
