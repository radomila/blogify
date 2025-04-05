'use client';

import { Post } from '@/types/posts';
import PostCard from '@/components/Components/Post/PostCard';
import DeletePostDialog from '@/components/Components/DeletePostDialog/DeletePostDialog';
import { useState } from 'react';

interface Props {
  posts: Post[];
}

const PostsList = ({ posts }: Props) => {
  const [deletePost, setDeletePost] = useState<{ post: Post | null; open: boolean }>({ post: null, open: false });

  return (
    <>
      <div
        className="flex flex-wrap justify-between items-center gap-10 md:gap-12 xl:gap-10"
        role="list"
        aria-label="Blog posts list"
      >
        {posts?.map((post) => {
          return (
            <PostCard
              key={post.id}
              post={post}
              onDeleteBtnClick={() => setDeletePost({ post, open: true })}
            />
          );
        })}
      </div>
      <DeletePostDialog
        id={deletePost.post?.id ?? ''}
        open={deletePost.open}
        setOpen={() => setDeletePost({ post: null, open: false })}
      />
    </>
  );
};

export default PostsList;
