import { AlertDialog as RadixAlertDialog } from 'radix-ui';
import Button from '@/components/Components/Button/Button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deletePost } from '@/services/PostService';
import styles from './styles.module.css';

interface Props {
  id: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DeletePostDialog = ({ id, open, setOpen }: Props) => {
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
    <RadixAlertDialog.Root open={open}>
      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className={styles.Overlay} />
        <RadixAlertDialog.Content className={styles.Content}>
          <RadixAlertDialog.Title className="m-0 text-xl font-medium">Delete post</RadixAlertDialog.Title>
          <RadixAlertDialog.Description className="py-5">Are you sure? This blog post will be no longer available after deletion.</RadixAlertDialog.Description>
          <div className="flex gap-5 justify-end">
            <Button
              onClick={() => setOpen(false)}
              variant="errorSecondary"
              size="errorSecondary"
            >
              Cancel
            </Button>
            <Button
              onClick={onDeleteBtnClick}
              variant="error"
              size="error"
            >
              Delete Post
            </Button>
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
};

export default DeletePostDialog;
