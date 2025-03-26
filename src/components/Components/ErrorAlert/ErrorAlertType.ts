import { ReactNode } from 'react';

export interface ErrorAlertType {
  error: string | ReactNode;
  showCloseButton: boolean;
  showHomeButton: boolean;
}
