'use client';

import {
  cloneElement,
  createContext,
  Dispatch,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { Spinner } from '../ui/spinner';
import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';

export const FormProcessingContext = createContext<
  Dispatch<SetStateAction<boolean>>
>(null!);

export function FormProcessor({ children }: { children: ReactElement }) {
  const [processingStatus, setProcessingStatus] = useState<boolean>(false);

  return (
    <div className="relative">
      {processingStatus && (
        <Spinner className="size-20 absolute top-[40%] right-[40%] z-1" />
      )}
      <div className={`${processingStatus ? 'blur-sm' : ''} z-0`}>
        <FormProcessingContext value={setProcessingStatus}>
          {children}
        </FormProcessingContext>
      </div>
    </div>
  );
}
