'use client';

import {
  createContext,
  Dispatch,
  JSX,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { Spinner } from '../ui/spinner';

export const FormProcessingContext = createContext<{
  setProcessingStatus: Dispatch<SetStateAction<boolean>>;
}>(null!);

export function FormProcessor({ children }: { children: ReactElement }) {
  const [processingStatus, setProcessingStatus] = useState<boolean>(false);

  return (
    <div className="relative">
      {processingStatus && (
        <Spinner className="size-20 absolute top-[40%] right-[40%] z-1" />
      )}
      <div className={`${processingStatus ? 'blur-sm' : ''} z-0`}>
        <FormProcessingContext
          value={{
            setProcessingStatus,
          }}
        >
          {children}
        </FormProcessingContext>
      </div>
    </div>
  );
}
