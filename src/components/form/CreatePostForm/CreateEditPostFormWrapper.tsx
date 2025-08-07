import { useQuery } from '@tanstack/react-query';
import { getPostById } from '@/services/PostService';
import OverlaySpinner from '@/components/core/OverlayLoading/OverlaySpinner';
import ErrorAlert from '@/components/core/ErrorAlert';
import CreateEditPostForm from '@/components/form/CreatePostForm/CreateEditPostForm';

interface Props {
  postId?: string;
}

export const CreateEditPostFormWrapper = ({ postId }: Props) => {
  const {
    data: editPostData,
    isFetching: isEditPostFetching,
    isError: isEditPostError,
    error: editPostError,
  } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId!),
    refetchOnWindowFocus: false,
    enabled: !!postId,
  });

  if (isEditPostFetching) return <OverlaySpinner />;

  if (isEditPostError) {
    return (
      <ErrorAlert
        error={editPostError instanceof Error ? editPostError.message : 'Something went wrong.'}
        showCloseButton={true}
        showHomeButton={true}
      />
    );
  }

  return <CreateEditPostForm editPostData={editPostData} />;
};
