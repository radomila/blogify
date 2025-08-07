'use client';

import { Form } from 'radix-ui';
import { RichTextEditorProps } from '@/components/inputs/types';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import RichTextEditor from '@/components/inputs/uncontrolled/RichTextEditor/RichTextEditor';

interface Props<T extends FieldValues> extends Omit<RichTextEditorProps, 'value' | 'onChange'> {
  control: Control<T>;
  name: Path<T>;
}

const RichTextEditorField = <T extends FieldValues>(props: Props<T>) => {
  const { control, name } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Form.Field
          className="flex flex-col gap-2"
          name={name}
          aria-label="Form input field"
        >
          <RichTextEditor
            {...props}
            onChange={onChange}
            value={value ?? ''}
            errorMessage={error?.message}
          />
        </Form.Field>
      )}
    />
  );
};

export default RichTextEditorField;
