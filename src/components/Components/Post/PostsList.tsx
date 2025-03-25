'use client';

import { Post } from '@/types/posts';
import PostCard from '@/components/Components/Post/PostCard';

interface Props {
  posts: Post[];
}

const PostsList = ({ posts }: Props) => {
  return (
    <div
      className="flex flex-wrap justify-center items-center gap-8 mt-20"
      role="group"
      aria-label="Blog posts list"
    >
      {posts?.map((post) => {
        return (
          <PostCard
            key={post.id}
            post={post}
          />
        );
      })}
    </div>
  );
};

export default PostsList;
