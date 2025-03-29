import { useQuery } from '@tanstack/react-query';
import { getPost } from '@/services/PostService';
import LoadingSpinner from '@/components/Components/Loading/LoadingSpinner';
import ErrorAlert from '@/components/Components/ErrorAlert/ErrorAlert';
import CreateEditPostForm from '@/components/Forms/CreatePostForm/CreateEditPostForm';

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
    queryFn: () => getPost(postId!),
    refetchOnWindowFocus: false,
    enabled: !!postId,
  });

  if (isEditPostFetching) return <LoadingSpinner />;

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
