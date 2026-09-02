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
import { GuideModelWithRelations } from 'shared-types';

export const GuidesContext = createContext<{
  guides: GuideModelWithRelations[];
  setGuides: Dispatch<SetStateAction<GuideModelWithRelations[]>>;
  guidesCount: number;
  setGuidesCount: Dispatch<SetStateAction<number>>;
}>(null!);

export function GuidesContextProvider({
  children,
  guidesProps,
  guidesCountProps,
}: {
  children: ReactNode;
  guidesProps: GuideModelWithRelations[];
  guidesCountProps: number;
}) {
  const [guides, setGuides] = useState<GuideModelWithRelations[]>(guidesProps);
  const [guidesCount, setGuidesCount] = useState<number>(guidesCountProps);

  useEffect(() => {
    setGuides(guidesProps);
  }, [guidesProps]);

  useEffect(() => {
    setGuidesCount(guidesCountProps);
  }, [guidesCountProps]);

  // const { data, refetch, error } = useContext(AuthContext);
  //
  // const pageSize = 8;
  // const pagesCount = Math.ceil(guidesCount / pageSize);
  //
  //

  // useEffect(() => {
  //   navigateToPage(currentPage);
  // }, []);
  //
  // const query = useQuery({
  //   queryKey: ['guides', currentPage],
  //   queryFn: () =>
  //     getGuidesInPagination({
  //       currentPage: parseInt(currentPage),
  //       pageSize: pageSize,
  //       userId: data!.user.id,
  //     }),
  // });
  //
  // useEffect(() => {
  //   if (query.isSuccess) {
  //     const [newGuides, newGuidesCount] = query.data;
  //     setGuides(newGuides);
  //     setGuidesCount(newGuidesCount);
  //   }
  // }, [query.data]);
  //
  // function navigateToPage(page: string) {
  //   params.set('page', page);
  //   router.push(`/guides/?${params}`);
  // }

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
