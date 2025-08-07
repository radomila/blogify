'use client';

import ProtectedRoute from '@/components/core/ProtectedRoute';
import { useParams } from 'next/navigation';
import { CreateEditPostFormWrapper } from '@/components/forms/CreatePostForm/CreateEditPostFormWrapper';
import BlogLayout from '@/components/layout/BlogLayout';

const EditPost = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <ProtectedRoute>
      <BlogLayout ariaLabelText="Edit blog post section">
        <CreateEditPostFormWrapper postId={id} />
      </BlogLayout>
    </ProtectedRoute>
  );
};

export default EditPost;
