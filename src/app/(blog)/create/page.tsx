'use client';

import CreatePostForm from '@/components/CreatePostForm/CreatePostForm';
import ProtectedRoute from '@/components/Components/ProtectedRoute';

const CreatePost = () => {
  return (
    <ProtectedRoute>
      <div className="flex justify-center gap-8">
        <CreatePostForm />
      </div>
    </ProtectedRoute>
  );
};

export default CreatePost;
