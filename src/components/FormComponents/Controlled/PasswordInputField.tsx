'use client';

import { Form } from 'radix-ui';
import FormInput from '@/components/FormComponents/Uncontrolled/FormInput';
import { FormInputProps } from '@/components/FormComponents/types';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { useState } from 'react';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';

interface Props<T extends FieldValues> extends Omit<FormInputProps, 'type'> {
  control: Control<T>;
  name: Path<T>;
}

const PasswordInputField = <T extends FieldValues>(props: Props<T>) => {
  const { control, name } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const inputType = isPasswordVisible ? 'text' : 'password';
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <Form.Field
          className="flex flex-col gap-2"
          name={name}
        >
          <FormInput
            {...props}
            onChange={onChange}
            onBlur={onBlur}
            value={value ?? ''}
            ref={ref}
            errorMessage={error?.message}
            type={inputType}
            endComponent={
              <button
                type="button"
                onClick={handlePasswordVisibility}
                className="cursor-pointer absolute"
              >
                {isPasswordVisible ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </button>
            }
          />
        </Form.Field>
      )}
    />
  );
};

export default PasswordInputField;
