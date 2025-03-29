'use client';

import { Form } from 'radix-ui';
import { FormFileInputProps } from '@/components/FormComponents/types';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import FormFileInput from '@/components/FormComponents/Uncontrolled/FormFileInput';

interface Props<T extends FieldValues> extends FormFileInputProps {
  control: Control<T>;
  name: Path<T>;
}

const FormFileInputField = <T extends FieldValues>(props: Props<T>) => {
  const { control, name } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <Form.Field
          className="flex flex-col gap-2"
          name={name}
          aria-label="Form input field"
        >
          <FormFileInput
            {...props}
            onSuccess={onChange}
            onBlur={onBlur}
            value={value ?? ''}
            ref={ref}
            errorMessage={error?.message}
          />
        </Form.Field>
      )}
    />
  );
};

export default FormFileInputField;
