import { Text } from '@radix-ui/themes';
import { Post } from '@/types/posts';
import LinkButton from '@/components/core/Button/LinkButton';
import { useAuth } from '@/hooks/useAuth';
import { ArrowRightIcon, CalendarIcon } from '@radix-ui/react-icons';
import DeletePostDialog from '@/components/core/DeletePostDialog';
import { useState } from 'react';
import { getCreatedAtDate } from '@/utils/getCreatedAtDate';
import { getFirstImageTag } from '@/utils/getFirstImageTag';
import { getCleanPostText } from '@/utils/getCleanPostText';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const [deletePost, setDeletePost] = useState<{ post: Post | null; open: boolean }>({ post: null, open: false });
  const { user } = useAuth();

  const isAuthor = user?.uid === post?.userId;
  const cleanPostText = getCleanPostText(post);
  const createdAtDate = getCreatedAtDate(post);
  const firstImageTag = getFirstImageTag(post);

  return (
    <li
      className="flex flex-col bg-background-light rounded-sm border-transparent shadow-shadow shadow-sm lg:transition-all lg:duration-300 lg:hover:scale-105 w-[350px] h-[450px]"
      role="listitem"
      aria-label="Blog post preview card"
    >
      {firstImageTag ? (
        <div
          className="w-full h-[180px] overflow-hidden mb-1"
          dangerouslySetInnerHTML={{ __html: firstImageTag }}
          aria-label="Blog post preview image"
        />
      ) : (
        <div
          className="w-full h-[180px] bg-shadow-medium mb-1 flex items-center justify-center"
          aria-hidden="true"
        >
          <img
            src="/icons/placeholder_icon.svg"
            alt="Placeholder image"
            className="w-15"
          />
        </div>
      )}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-2 pb-2 text-shadow font-medium">
          <CalendarIcon className="w-5 h-5" />
          <Text
            as="p"
            size="3"
          >
            {createdAtDate}
          </Text>
        </div>

        <Text
          as="p"
          size="5"
          mb="3"
          className="font-medium"
        >
          {post.title}
        </Text>

        <Text
          as="p"
          size="2"
          className="line-clamp-4"
        >
          {cleanPostText}
        </Text>
      </div>
      <div className="flex justify-between items-center mt-4 p-6">
        <LinkButton
          href={`/${post.id}`}
          variant="detail"
          size="default"
          aria-label="Read more"
        >
          Read more
          <ArrowRightIcon className="h-6 w-6 pl-1" />
        </LinkButton>
        {user && isAuthor && (
          <div className="flex flex-row gap-6">
            <LinkButton
              href={`/edit/${post.id}`}
              variant="default"
              size="default"
              aria-label="Update blog post"
            >
              <img
                src="/icons/pencil_icon.svg"
                alt=""
                role="img"
                className="w-6 h-8"
              />
            </LinkButton>
            <DeletePostDialog
              id={deletePost.post?.id ?? ''}
              setOpen={() => setDeletePost({ post: null, open: false })}
              onDeleteConfirmationBtnClick={() => setDeletePost({ post, open: true })}
            />
          </div>
        )}
      </div>
    </li>
  );
};

export default PostCard;
