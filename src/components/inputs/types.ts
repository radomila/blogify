import { ChangeEventHandler, FocusEventHandler, ReactNode, Ref } from 'react';

export interface FormInputProps {
  type: 'email' | 'password' | 'text' | 'file';
  placeholder?: string;
  label: string;
  isRequired?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
  ref?: Ref<HTMLInputElement> | undefined;
  errorMessage?: string | undefined;
  tooltipText: string;
  endComponent?: ReactNode;
  name?: string;
}

export interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  label: string;
  isRequired?: boolean;
  tooltipText: string;
  name?: string;
  errorMessage?: string | undefined;
}

export interface FormFileInputProps extends Omit<FormInputProps, 'type' | 'onChange'> {
  acceptFiles: string;
  disabled?: boolean;
  onSuccess: (fileUrl: string) => void;
  onError: (error: string) => void;
}
