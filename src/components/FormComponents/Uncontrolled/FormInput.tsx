import { Form } from 'radix-ui';
import { FormInputProps } from '@/components/FormComponents/types';
import Tooltip from '@/components/Components/Tooltip/Tooltip';

const FormInput = ({ type, placeholder, label, isRequired, onChange, onBlur, value, ref, errorMessage, tooltipText, endComponent, name }: FormInputProps) => {
  return (
    <>
      <div
        className="flex items-center justify-between"
        role="group"
        aria-label="Form input"
      >
        <Form.Label
          className="text-gray-800 text-lg font-medium pb-2"
          htmlFor={name}
          id={name}
        >
          {label}
          {isRequired && <span className="text-red-500 pl-1">*</span>}
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
            className="box-border w-full h-[40px] rounded-md border border-[#57595B] bg-white p-2 pr-10 focus:border-blue-600 focus:outline-none"
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
        className="text-red-500"
        role="status"
        aria-label="Error message"
      >
        {errorMessage}
      </div>
    </>
  );
};

export default FormInput;
