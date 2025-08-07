'use client';

import ProtectedRoute from '@/components/core/ProtectedRoute';
import BlogLayout from '@/components/layouts/BlogLayout';
import CreateEditPostForm from '@/components/form/CreatePostForm/CreateEditPostForm';

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
