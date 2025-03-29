'use client';

import CreateEditPostForm from '@/components/Forms/CreatePostForm/CreateEditPostForm';
import ProtectedRoute from '@/components/Components/ProtectedRoute';

const CreatePost = () => {
  return (
    <ProtectedRoute>
      <div className="flex justify-center gap-8">
        <CreateEditPostForm />
      </div>
    </ProtectedRoute>
  );
};

export default CreatePost;
