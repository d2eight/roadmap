import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { DialogContextType } from 'shared-types';

export const DialogContext = createContext<DialogContextType>(null!);

export function DialogContextProvider({ children }: { children: ReactNode }) {
  const [dialogStatus, setDialogStatus] = useState<boolean>(false);

  return (
    <DialogContext
      value={{
        dialogStatus,
        setDialogStatus,
      }}
    >
      {children}
    </DialogContext>
  );
}
