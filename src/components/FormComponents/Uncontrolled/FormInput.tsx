import { Form } from 'radix-ui';
import { FormInputProps } from '@/components/FormComponents/types';
import Tooltip from '@/components/Components/Tooltip/Tooltip';

const FormInput = ({ type, placeholder, label, isRequired, onChange, onBlur, value, ref, errorMessage, tooltipText, endComponent }: FormInputProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Form.Label className="text-gray-800 text-lg font-medium pb-2">
          {label}
          {isRequired && <span className="text-red-500 pl-1">*</span>}
        </Form.Label>
        <Tooltip text={tooltipText} />
      </div>
      <div className="relative w-full max-w-xs">
        <Form.Control asChild>
          <input
            type={type}
            required={isRequired}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            className="box-border w-full h-[40px] rounded-md border border-gray-400 bg-white p-2 pr-10 focus:border-blue-500 focus:outline-none"
          />
        </Form.Control>
        {endComponent && <div className="absolute right-7 top-1/3">{endComponent}</div>}
      </div>
      <div className="text-red-500">{errorMessage}</div>
    </>
  );
};

export default FormInput;
