'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { GuideModelWithRelations, QueryKeyType } from 'shared-types';
import { useQuery } from '@tanstack/react-query';
import { getGuides } from 'utils';
import { AuthContext } from '@/context/AuthContext';
import { ParamsContext } from '@/context/ParamsContext';
import { pageSize } from '@/constants/constants';

export const GuidesContext = createContext<{
  guides: GuideModelWithRelations[];
  setGuides?: Dispatch<SetStateAction<GuideModelWithRelations[]>>;
  guidesCount: number;
  setGuidesCount?: Dispatch<SetStateAction<number>>;
}>(null!);

export function GuidesContextProvider({ children }: { children: ReactNode }) {
  const auth = useContext(AuthContext);
  const { parsedParams } = useContext(ParamsContext);

  const queryKey: QueryKeyType = [
    'guides',
    parsedParams.page,
    parsedParams.orderBy,
    parsedParams.progressStatus,
  ];
  const userId = auth.data && auth.data.user.id ? auth.data.user.id : '';

  const { data } = useQuery({
    queryKey,
    queryFn: () =>
      getGuides({
        pageSize: pageSize,
        userId: userId,
        params: parsedParams,
      }),
  });

  const [guides, setGuides] = useState<GuideModelWithRelations[]>([]);
  const [guidesCount, setGuidesCount] = useState<number>(0);

  useEffect(() => {
    if (data) {
      setGuides(data[0]);
      setGuidesCount(data[1]);
    }
  }, [data]);

  return (
    <GuidesContext
      value={{
        guides,
        setGuides,
        guidesCount,
        setGuidesCount,
      }}
    >
      {children}
    </GuidesContext>
  );
}
