import { AlertDialog as RadixAlertDialog, Form } from 'radix-ui';
import Button from '@/components/Components/Button/Button';
import styles from './styles.module.css';
import UploadImageForm from '@/components/Forms/UploadImageForm/UploadImageForm';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { uploadImageFormSchema } from '@/components/Forms/UploadImageForm/uploadImageFormSchema';
import { UploadImageFormType } from '@/components/Forms/UploadImageForm/UploadImageFormType';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  onSubmitCallback: (uploadedImage: UploadImageFormType) => void;
}

const DeletePostDialog = ({ open, setOpen, onSubmitCallback }: Props) => {
  const form = useForm<UploadImageFormType>({
    resolver: zodResolver(uploadImageFormSchema),
  });
  const { handleSubmit, trigger } = form;

  const handleFormOnSubmit = async (image: UploadImageFormType) => {
    onSubmitCallback(image);
    setOpen(false);
  };

  return (
    <RadixAlertDialog.Root open={open}>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className={styles.Overlay} />
        <RadixAlertDialog.Content className={styles.Content}>
          <RadixAlertDialog.Title className="m-0 text-xl font-medium">Upload Image</RadixAlertDialog.Title>
          <Form.Root
            className="gap-8 w-full"
            name="uploadImage"
            onSubmit={(e) => {
              handleSubmit(handleFormOnSubmit, (err) => console.error(err))();
              e.stopPropagation();
            }}
          >
            <UploadImageForm form={form} />
            <div className="flex gap-5 justify-end">
              <Button
                onClick={() => setOpen(false)}
                variant="uploadSecondary"
                size="uploadSecondary"
                aria-label="Cancel"
              >
                Cancel
              </Button>
              <Button
                variant="upload"
                size="upload"
                type="submit"
                onClick={() => trigger()}
                aria-label="Upload image"
              >
                Upload
              </Button>
            </div>
          </Form.Root>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
};

export default DeletePostDialog;
