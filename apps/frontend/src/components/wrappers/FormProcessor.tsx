'use client';

import {
  createContext,
  Dispatch,
  JSX,
  ReactElement,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { Spinner } from '../ui/spinner';

export const FormProcessingContext = createContext<{
  processingStatus: boolean;
  setProcessingStatus: Dispatch<SetStateAction<boolean>>;
}>(null!);

export function FormProcessor({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const [processingStatus, setProcessingStatus] = useState<boolean>(false);

  return (
    <div className={`${className ? className : ''} relative w-full h-full`}>
      {processingStatus && (
        <>
          <Spinner className="size-20 absolute top-[40%] right-[40%] z-1" />
        </>
      )}
      <FormProcessingContext
        value={{
          processingStatus,
          setProcessingStatus,
        }}
      >
        <div className={`${processingStatus ? 'blur-xs' : ''} h-full`}>
          {children}
        </div>
      </FormProcessingContext>
    </div>
  );
}
