'use client';

import { Post } from '@/types/posts';
import PostCard from '@/components/Components/Post/PostCard';

interface Props {
  posts: Post[];
}

const PostsList = ({ posts }: Props) => {
  return (
    <>
      <ul
        className="flex flex-wrap justify-between lg:justify-center items-center gap-10 md:gap-12 xl:gap-12"
        role="list"
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
      </ul>
    </>
  );
};

export default PostsList;
