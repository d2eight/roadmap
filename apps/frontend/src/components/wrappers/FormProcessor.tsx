'use client';

import {
  cloneElement,
  createContext,
  Dispatch,
  forwardRef,
  JSX,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { Spinner } from '../ui/spinner';
import { GuideModel } from '@/libs/db/generated/prisma/models/Guide';
import { RedAlert } from '../custom-ui/RedAlert';

export const FormProcessingContext = createContext<{
  setProcessingStatus: Dispatch<SetStateAction<boolean>>;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  FormAlert: () => JSX.Element;
}>(null!);

export function FormProcessor({ children }: { children: ReactElement }) {
  const [processingStatus, setProcessingStatus] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('Try again');
  const FormAlert = () => (
    <RedAlert tile={'Something went wrong'} message={errorMessage} />
  );

  return (
    <div className="relative">
      {processingStatus && (
        <Spinner className="size-20 absolute top-[40%] right-[40%] z-1" />
      )}
      <div className={`${processingStatus ? 'blur-sm' : ''} z-0`}>
        <FormProcessingContext
          value={{
            setProcessingStatus,
            setErrorMessage,
            FormAlert,
          }}
        >
          {children}
        </FormProcessingContext>
      </div>
    </div>
  );
}
