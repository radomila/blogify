'use client';

import FormInputField from '@/components/inputs/controlled/FormInputField';
import { UseFormReturn } from 'react-hook-form';
import { UploadImageFormType } from '@/components/form/UploadImageForm/UploadImageFormType';
import { useState } from 'react';
import ErrorAlert from '@/components/core/ErrorAlert';
import FormFileInputField from '@/components/inputs/controlled/FormFileInputField';

interface Props {
  form: UseFormReturn<UploadImageFormType>;
}

const UploadImageForm = ({ form }: Props) => {
  const { control, setValue } = form;
  const [uploadError, setUploadError] = useState<string | null>(null);

  const onFileUploaded = (fileUrl: string) => {
    setValue('imageUrl', fileUrl);
  };

  return (
    <div
      className="text-center flex flex-col items-center justify-center py-5"
      aria-label="Create post form"
    >
      {uploadError && (
        <ErrorAlert
          error={uploadError}
          showCloseButton={true}
          showHomeButton={true}
        />
      )}
      <FormInputField
        label="Image Title"
        type="text"
        placeholder="Image Title"
        isRequired
        control={control}
        name="imageTitle"
        tooltipText="Enter a title, describing the image."
      />
      <FormInputField
        label="URL"
        type="text"
        placeholder="URL address"
        isRequired
        control={control}
        name="imageUrl"
        tooltipText="Enter a valid URL address of the image."
      />
      <p>Or upload from computer</p>
      <FormFileInputField
        control={control}
        label="Image"
        name="imageUrl"
        tooltipText="Upload an image from your computer."
        acceptFiles="image/*"
        onSuccess={onFileUploaded}
        onError={setUploadError}
      />
    </div>
  );
};

export default UploadImageForm;
