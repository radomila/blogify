'use client';

import { Form } from 'radix-ui';
import FormInputField from '@/components/FormComponents/Controlled/FormInputField';
import { useForm } from 'react-hook-form';
import { CreatePostFormType } from '@/components/CreatePostForm/CreatePostFormType';
import { createPostFormSchema } from '@/components/CreatePostForm/createPostFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import RichTextEditor from '@/components/Components/RichTextEditor/RichTextEditor';

const CreatePostForm = () => {
  const { handleSubmit, control, trigger } = useForm<CreatePostFormType>({
    resolver: zodResolver(createPostFormSchema),
  });
  return (
    <Form.Root className="flex col gap-8 mt-12">
      <FormInputField
        label="Title"
        type="text"
        placeholder="Post title"
        isRequired
        control={control}
        name="title"
        tooltipText="Enter a title, describing the main content of the blog post."
      />
      <RichTextEditor />
    </Form.Root>
  );
};

export default CreatePostForm;
