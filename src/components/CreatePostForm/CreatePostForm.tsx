'use client';

import { Form } from 'radix-ui';
import FormInputField from '@/components/FormComponents/Controlled/FormInputField';
import { useForm } from 'react-hook-form';
import { CreatePostFormType } from '@/components/CreatePostForm/CreatePostFormType';
import { createPostFormSchema } from '@/components/CreatePostForm/createPostFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/components/Components/Button/Button';
import { useOverlayLoading } from '@/hooks/useOverlayLoading';
import { useRouter } from 'next/navigation';
import { createPost } from '@/services/PostService';
import { Heading } from '@radix-ui/themes';
import { useState } from 'react';
import ErrorAlert from '@/components/Components/ErrorAlert/ErrorAlert';

const CreatePostForm = () => {
  const router = useRouter();
  const { showOverlay, hideOverlay } = useOverlayLoading();
  const { handleSubmit, control, trigger } = useForm<CreatePostFormType>({
    resolver: zodResolver(createPostFormSchema),
  });
  const [error, setError] = useState<string | null>(null);

  const text = 'create post';

  const handleFormOnSubmit = async (post: CreatePostFormType) => {
    setError(null);
    try {
      showOverlay();
      await createPost(post);
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
      console.log(err);
    } finally {
      hideOverlay();
    }
  };

  return (
    <div
      className="text-center mt-10 flex flex-col items-center justify-center"
      aria-label="Create post form"
    >
      <Heading
        as="h1"
        size="7"
        role="heading"
        aria-level={1}
      >
        Create Post
      </Heading>
      {error && (
        <ErrorAlert
          error={error}
          showCloseButton={true}
          showHomeButton={true}
        />
      )}
      <Form.Root
        className="flex flex-col gap-8 mt-12 w-fit"
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
        <FormInputField
          label="Text"
          type="text"
          placeholder="Post text"
          isRequired
          control={control}
          name="text"
          tooltipText="Enter some cool text"
        />
        <Button
          onClick={() => trigger()}
          variant="form"
          size="form"
          aria-label="Create post button"
        >
          {text.toUpperCase()}
        </Button>
      </Form.Root>
    </div>
  );
};

export default CreatePostForm;
