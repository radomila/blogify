"use client";

import { Form } from "radix-ui";
import FormInput from "@/components/FormComponents/Uncontrolled/FormInput";
import { FormInputProps } from "@/components/FormComponents/types";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> extends FormInputProps {
  control: Control<T>;
  name: Path<T>;
}

const FormInputField = <T extends FieldValues>(props: Props<T>) => {
  const { control, name } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
      }) => (
        <Form.Field className="flex flex-col gap-2" name={name}>
          <FormInput
            {...props}
            onChange={onChange}
            onBlur={onBlur}
            value={value ?? ""}
            ref={ref}
            errorMessage={error?.message}
          />
        </Form.Field>
      )}
    />
  );
};

export default FormInputField;
