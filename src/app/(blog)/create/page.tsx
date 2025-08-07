'use client';

import CreateEditPostForm from '@/components/forms/CreatePostForm/CreateEditPostForm';
import ProtectedRoute from '@/components/core/ProtectedRoute';
import BlogLayout from '@/components/layout/BlogLayout';

const CreatePost = () => {
  return (
    <ProtectedRoute>
      <BlogLayout ariaLabelText="Create blog post section">
        <CreateEditPostForm />
      </BlogLayout>
    </ProtectedRoute>
  );
};

export default CreatePost;
