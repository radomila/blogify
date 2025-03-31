import { Form } from 'radix-ui';
import { FormFileInputProps } from '@/components/FormComponents/types';
import Tooltip from '@/components/Components/Tooltip/Tooltip';
import { ChangeEvent, useState } from 'react';
import { getDownloadURL, ref as firebaseRef, uploadBytesResumable } from '@firebase/storage';
import { firebaseStorage } from '@/clients/firebase';

const FormFileInput = ({ placeholder, label, isRequired, onSuccess, onError, ref, onBlur, errorMessage, tooltipText, name, acceptFiles, disabled }: FormFileInputProps) => {
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const storageRef = firebaseRef(firebaseStorage, `posts/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    setUploading(true);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error('Upload failed:', error);
        onError(error.message);
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        onSuccess(downloadURL);
        setUploading(false);
      },
    );
  };

  return (
    <>
      <div
        className="flex items-center justify-between"
        role="group"
        aria-label="Form input"
      >
        <div className="text-gray-800 text-lg font-medium pb-2">
          {label}
          {isRequired && <span className="text-red-500 pl-1">*</span>}
        </div>
        <Tooltip text={tooltipText} />
      </div>
      <div
        className="relative w-full"
        role="group"
      >
        <Form.Label
          className="cursor-pointer box-border block w-60 h-[40px] rounded-md border border-[#57595B] bg-white p-2 pr-10 focus:border-blue-600 focus:outline-none"
          htmlFor={name}
        >
          Upload Image
        </Form.Label>
        <Form.Control asChild>
          <input
            type="file"
            required={isRequired}
            placeholder={placeholder}
            onChange={handleImageUpload}
            onBlur={onBlur}
            ref={ref}
            accept={acceptFiles}
            className="hidden"
            id={name}
            disabled={disabled || uploading}
            aria-labelledby={name}
          />
        </Form.Control>
        {uploading && <p>Uploading...</p>}
        <div
          className="text-red-500"
          role="status"
          aria-label="Error message"
        >
          {errorMessage}
        </div>
      </div>
    </>
  );
};

export default FormFileInput;
