'use client';

import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircleIcon } from 'lucide-react';

export function RedAlert({ tile, message }: { tile: string; message: string }) {
  return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>{tile}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
