import { Form } from 'radix-ui';
import { FormInputProps } from '@/components/inputs/types';
import Tooltip from '@/components/core/Tooltip';

const FormInput = ({ type, placeholder, label, isRequired, onChange, onBlur, value, ref, errorMessage, tooltipText, endComponent, name }: FormInputProps) => {
  return (
    <>
      <div
        className="flex items-center justify-between"
        role="group"
        aria-label="Form input"
      >
        <Form.Label
          className="text-foreground text-lg font-medium pb-2"
          htmlFor={name}
          id={name}
        >
          {label}
          {isRequired && <span className="text-error pl-1">*</span>}
        </Form.Label>
        <Tooltip text={tooltipText} />
      </div>
      <div
        className="relative w-full"
        role="group"
      >
        <Form.Control asChild>
          <input
            type={type}
            required={isRequired}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            className="box-border w-full h-[40px] rounded-md border border-shadow bg-background-light p-2 pr-10 focus:border-primary focus:outline-none"
            id={name}
            aria-labelledby={name}
          />
        </Form.Control>
        {endComponent && (
          <div
            className="absolute right-7 top-1/3"
            aria-label="Hide/show password"
          >
            {endComponent}
          </div>
        )}
      </div>
      <div
        className="text-red-500 text-left"
        role="status"
        aria-label="Error message"
      >
        {errorMessage}
      </div>
    </>
  );
};

export default FormInput;
