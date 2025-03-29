'use client';

import { Form } from 'radix-ui';
import FormInputField from '@/components/FormComponents/Controlled/FormInputField';
import { useForm } from 'react-hook-form';
import { CreateEditPostFormType } from '@/components/Forms/CreatePostForm/CreateEditPostFormType';
import { createEditPostFormSchema } from '@/components/Forms/CreatePostForm/createEditPostFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/Components/Button/Button';
import { useOverlayLoading } from '@/hooks/useOverlayLoading';
import { useRouter } from 'next/navigation';
import { createPost, updatePost } from '@/services/PostService';
import { Heading } from '@radix-ui/themes';
import { useState } from 'react';
import ErrorAlert from '@/components/Components/ErrorAlert/ErrorAlert';
import RichTextEditorField from '@/components/FormComponents/Controlled/RichTextEditorField';
import { Post } from '@/types/posts';

interface Props {
  editPostData?: Post;
}

const CreateEditPostForm = ({ editPostData }: Props) => {
  const router = useRouter();
  const { showOverlay, hideOverlay } = useOverlayLoading();

  const { handleSubmit, control, trigger } = useForm<CreateEditPostFormType>({
    resolver: zodResolver(createEditPostFormSchema),
    defaultValues: editPostData ?? {},
  });
  const [submitError, setSubmitError] = useState<string | null>(null);

  const createPostBtn = 'create post';
  const editPostBtn = 'edit post';

  const handleFormOnSubmit = async (post: CreateEditPostFormType) => {
    setSubmitError(null);
    try {
      showOverlay();
      if (editPostData) {
        await updatePost(editPostData.id, post);
      } else {
        await createPost(post);
      }
      router.push('/');
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong.');
      console.log(err);
    } finally {
      hideOverlay();
    }
  };

  return (
    <div
      className="text-center mt-10 flex flex-col items-center justify-center"
      aria-label={editPostData ? 'Edit post form' : 'Create post form'}
    >
      <Heading
        as="h1"
        size="7"
        role="heading"
        aria-level={1}
      >
        {editPostData ? 'Edit Post' : 'Create Post'}
      </Heading>
      {submitError && (
        <ErrorAlert
          error={submitError}
          showCloseButton={true}
          showHomeButton={true}
        />
      )}
      <Form.Root
        className="flex flex-col gap-8 mt-12 w-fit"
        name={editPostData ? 'editPost' : 'createPost'}
        onSubmit={handleSubmit(handleFormOnSubmit, (err) => console.error(err))}
      >
        <FormInputField
          label="Title"
          type="text"
          placeholder="Post title"
          isRequired
          control={control}
          name="title"
          tooltipText="Enter a title, describing the main content of the blog post."
        />
        <RichTextEditorField<CreateEditPostFormType>
          label="Content"
          isRequired
          control={control}
          name="text"
          tooltipText="Enter blog post content. The content can be edited using the toolbar, including, for example, inserting images."
        />
        <Button
          onClick={() => trigger()}
          variant="form"
          className="w-full"
          size="form"
          aria-label={editPostData ? 'Edit post button' : 'Create post button'}
        >
          {editPostData ? editPostBtn.toUpperCase() : createPostBtn.toUpperCase()}
        </Button>
      </Form.Root>
    </div>
  );
};

export default CreateEditPostForm;
