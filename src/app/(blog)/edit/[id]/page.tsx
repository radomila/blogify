'use client';

import ProtectedRoute from '@/components/Components/ProtectedRoute';
import { useParams } from 'next/navigation';
import { CreateEditPostFormWrapper } from '@/components/Forms/CreatePostForm/CreateEditPostFormWrapper';

const EditPost = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <ProtectedRoute>
      <div className="flex justify-center gap-8">
        <CreateEditPostFormWrapper postId={id} />
      </div>
    </ProtectedRoute>
  );
};

export default EditPost;
