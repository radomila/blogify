import { ChangeEventHandler, FocusEventHandler, Ref } from "react";

export interface FormInputProps {
  type: "email" | "password";
  placeholder?: string;
  label: string;
  isRequired?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  value?: string | number | readonly string[] | undefined;
  ref?: Ref<HTMLInputElement> | undefined;
  errorMessage?: string | undefined;
  tooltipText: string;
}
