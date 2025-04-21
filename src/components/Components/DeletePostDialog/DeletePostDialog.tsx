import { AlertDialog as RadixAlertDialog } from 'radix-ui';
import Button from '@/components/Components/Button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '@/services/PostService';
import styles from './styles.module.css';
import * as React from 'react';

interface Props {
  id: string;
  //open: boolean;
  setOpen: (open: boolean) => void;
  onDeleteConfirmationBtnClick: () => void;
}

const DeletePostDialog = ({ id, setOpen, onDeleteConfirmationBtnClick }: Props) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id: string) => deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const onDeleteBtnClick = () => {
    mutate(id);
    setOpen(false);
  };

  return (
    <RadixAlertDialog.Root>
      <RadixAlertDialog.Trigger asChild>
        <Button
          onClick={onDeleteConfirmationBtnClick}
          variant="default"
          size="default"
          aria-label="Delete blog post"
        >
          <img
            src="/delete_icon.svg"
            alt=""
            role="img"
            className="w-6 h-8"
          />
        </Button>
      </RadixAlertDialog.Trigger>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className={styles.Overlay} />
        <RadixAlertDialog.Content className={styles.Content}>
          <RadixAlertDialog.Title className="m-0 text-xl font-medium">Delete post</RadixAlertDialog.Title>
          <RadixAlertDialog.Description className="py-5">Are you sure? This blog post will be no longer available after deletion.</RadixAlertDialog.Description>
          <div className="flex gap-5 justify-end">
            <RadixAlertDialog.Cancel>
              <Button
                onClick={() => setOpen(false)}
                variant="errorSecondary"
                size="errorSecondary"
                aria-label="Cancel"
              >
                Cancel
              </Button>
            </RadixAlertDialog.Cancel>
            <RadixAlertDialog.Action>
              <Button
                onClick={onDeleteBtnClick}
                variant="error"
                size="error"
                aria-label="Delete post"
              >
                Delete post
              </Button>
            </RadixAlertDialog.Action>
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
};

export default DeletePostDialog;
