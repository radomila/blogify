'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPost } from '@/services/PostService';
import { Post } from '@/types/posts';
import { Heading } from '@radix-ui/themes';

const PostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPost(id);
        setPost(post);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPost();
  }, [id]);

  console.log(post);
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-10 w-full max-w-2xl mx-auto">
      <Heading
        as="h1"
        size="8"
        role="heading"
        aria-level={1}
      >
        {post?.title}
      </Heading>
      <p>{post?.text}</p>
    </div>
  );
};

export default PostDetail;
