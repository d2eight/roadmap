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
  const queryClient = useQueryClient();
  const { guide } = useContext(GuideContext);
  const { searchParams, queryKey } = useContext(ParamsContext);

  const { mutate } = useMutation({
    mutationFn: removeGuide,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey });
    },
  });

  async function removeGuide() {
    const parsedParams = paramsSchema.safeParse(
      searchParamsToObj(searchParams),
    );

    const params = parsedParams.success
      ? searchParams
      : getDefaultSearchParams({ searchParams });

    const response = await fetch(
      `http://localhost:3333/api/remove-guide/${guide.id}?${params}`,
      {
        method: 'DELETE',
        credentials: 'include',
      },
    );

    const body = await response.json();

    if (!response.ok && !body.success) {
      throw new ApiError(
        response.status,
        body.error.message ?? response.statusText,
      );
    }

    return body;
  }

  return (
    <Card className="flex flex-col justify-between">
      <GuideCardHeader mutate={mutate} />
      <GuideCardContent />
      <GuideCardFooter />
    </Card>
  );
}
