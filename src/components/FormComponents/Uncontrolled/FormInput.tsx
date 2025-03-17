import { Form } from "radix-ui";
import { FormInputProps } from "@/components/FormComponents/types";
import Tooltip from "@/components/Components/Tooltip/Tooltip";

const FormInput = ({
  type,
  placeholder,
  label,
  isRequired,
  onChange,
  onBlur,
  value,
  ref,
  errorMessage,
  tooltipText,
}: FormInputProps) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Form.Label className="text-gray-800 text-lg font-medium pb-2">
          {label}
          {isRequired && <span className="text-red-500 pl-1">*</span>}
        </Form.Label>
        <Tooltip text={tooltipText} />
      </div>
      <Form.Control asChild>
        <input
          type={type}
          required={isRequired}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          className="box-border inline-flex h-[35px] max-w-xs rounded-md border-1 bg-white border-gray-400 p-2 focus:border-blue-500 focus:outline-none"
        />
      </Form.Control>
      <div className="text-red-500">{errorMessage}</div>
    </>
  );
};

export default FormInput;
