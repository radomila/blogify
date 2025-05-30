import { Text } from '@radix-ui/themes';
import { Post } from '@/types/posts';
import LinkButton from '@/components/Components/Button/LinkButton';
import { useAuth } from '@/hooks/useAuth';
import DOMPurify from 'dompurify';
import { ArrowRightIcon, CalendarIcon } from '@radix-ui/react-icons';
import DeletePostDialog from '@/components/Components/DeletePostDialog/DeletePostDialog';
import * as React from 'react';
import { useState } from 'react';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const [deletePost, setDeletePost] = useState<{ post: Post | null; open: boolean }>({ post: null, open: false });
  const { user } = useAuth();

  const date = new Date(post.createdAt!);
  const month = date.toLocaleString('en-EN', { month: 'short' });
  const day = date.toLocaleString('en-EN', { day: '2-digit' });
  const year = date.toLocaleString('en-EN', { year: 'numeric' });
  const createdAtDate = `${month} ${day} ${year}`;

  const cleanPostText = DOMPurify.sanitize(post?.text ?? '', { USE_PROFILES: { html: false } });
  const isAuthor = user?.uid === post?.userId;

  const getFirstImageTag = () => {
    const cleanHtml = DOMPurify.sanitize(post?.text);
    const parser = new DOMParser();
    const doc = parser.parseFromString(cleanHtml, 'text/html');
    const imgTag = doc.querySelector('img');
    if (imgTag) {
      imgTag.removeAttribute('width');
      imgTag.removeAttribute('height');
      return imgTag.outerHTML;
    }
    return null;
  };
  const firstImageTag = getFirstImageTag();

  return (
    <li
      className="flex flex-col bg-white rounded-sm border-transparent shadow-[#57595B] shadow-sm lg:transition-all lg:duration-300 lg:hover:scale-105 w-[350px] h-[450px]"
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
          className="w-full h-[180px] bg-[#A6AAAD] mb-1 flex items-center justify-center"
          aria-hidden="true"
        >
          <img
            src="/placeholder_icon.svg"
            alt="Placeholder image"
            className="w-15"
          />
        </div>
      )}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-2 pb-2 text-[#57595B] font-medium">
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
                src="/pencil_icon.svg"
                alt=""
                role="img"
                className="w-6 h-8"
              />
            </LinkButton>
            <DeletePostDialog
              id={deletePost.post?.id ?? ''}
              //open={deletePost.open}
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
