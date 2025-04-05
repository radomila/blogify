import { Text } from '@radix-ui/themes';
import { Post } from '@/types/posts';
import LinkButton from '@/components/Components/Button/LinkButton';
import Button from '@/components/Components/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import DOMPurify from 'dompurify';
import { ArrowRightIcon, CalendarIcon } from '@radix-ui/react-icons';
import * as React from 'react';

interface Props {
  post: Post;
  onDeleteBtnClick: () => void;
}

const PostCard = ({ post, onDeleteBtnClick }: Props) => {
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
    <div
      className="flex flex-col bg-white rounded-sm border-transparent shadow-[#57595B] shadow-sm md:transition-all md:duration-300 md:hover:scale-105 w-[350px] h-[450px]"
      role="listitem"
      aria-label="Blog post preview card"
    >
      {firstImageTag ? (
        <div
          className="w-full h-[170px] overflow-hidden mb-1"
          dangerouslySetInnerHTML={{ __html: firstImageTag }}
          aria-label="Blog post preview image"
        />
      ) : (
        <div
          className="w-full h-[170px] bg-[#A6AAAD] mb-1"
          aria-label="Blog post preview image placeholder"
        ></div>
      )}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-center gap-2 pb-2 text-[#57595B] font-medium">
          <CalendarIcon />
          <Text
            as="p"
            size="2"
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
            <Button
              onClick={onDeleteBtnClick}
              variant="default"
              size="default"
              aria-label="Delete blog post"
            >
              <img
                src="/delete_icon.svg"
                alt=""
                role="img"
                className="w-6 h-8"
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
