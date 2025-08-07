'use client';

import { useParams } from 'next/navigation';
import { getPostById } from '@/services/PostService';
import { Heading } from '@radix-ui/themes';
import { useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import OverlaySpinner from '@/components/core/OverlayLoading/OverlaySpinner';
import ErrorAlert from '@/components/core/ErrorAlert';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();

  const {
    data: post,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPostById(id),
  });

  const cleanPostText = DOMPurify.sanitize(post?.text ?? '', { USE_PROFILES: { html: true } });

  if (isFetching) return <OverlaySpinner />;

  return (
    <article className="flex flex-col items-center justify-center mt-10 gap-10 w-full max-w-2xl mx-auto">
      {isError && (
        <ErrorAlert
          error={error instanceof Error ? error.message : 'Something went wrong.'}
          showCloseButton={true}
          showHomeButton={true}
        />
      )}
      <Heading
        as="h1"
        size="8"
        role="heading"
        aria-level={1}
      >
        {post?.title}
      </Heading>
      <div
        dangerouslySetInnerHTML={{ __html: cleanPostText }}
        aria-label="Blog post content"
      />
    </article>
  );
};

export default PostDetail;
