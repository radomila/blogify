import { Text } from '@radix-ui/themes';
import { Post } from '@/types/posts';
import LinkButton from '@/components/Components/Button/LinkButton';
import Button from '@/components/Components/Button/Button';
import { useAuth } from '@/hooks/useAuth';
import DOMPurify from 'dompurify';

interface Props {
  post: Post;
  onDeleteBtnClick: () => void;
}

const PostCard = ({ post, onDeleteBtnClick }: Props) => {
  const { user } = useAuth();

  // const date = new Date(post.createdAt!);
  // const month = date.toLocaleString('en-EN', { month: 'short' });
  // const day = date.toLocaleString('en-EN', { day: '2-digit' });
  // const year = date.toLocaleString('en-EN', { year: 'numeric' });
  // const createdAtDate = `${month} ${day} ${year}`;

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
      className="flex flex-col p-3 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105 w-[350px] h-[450px]"
      role="article"
      aria-label="Blog post card"
    >
      {firstImageTag ? (
        <div
          className="w-full h-[150px] overflow-hidden"
          dangerouslySetInnerHTML={{ __html: firstImageTag }}
        />
      ) : (
        <div
          className="w-full h-[150px] bg-gray-300 mb-4"
          role="img"
          aria-label="Blog post preview image placeholder"
        ></div>
      )}
      <div className="flex flex-col flex-grow p-3">
        <Text
          as="p"
          size="4"
          mb="5"
          className="font-medium"
          aria-label="Blog post title"
        >
          {post.title}
        </Text>

        <Text
          as="p"
          size="2"
          className="line-clamp-4"
          aria-label="Blog post text"
        >
          {cleanPostText}
        </Text>
      </div>
      <div className="flex justify-between items-center mt-4 p-3">
        <LinkButton
          href={`/${post.id}`}
          variant="detail"
          size="detail"
          aria-label="Read more"
        >
          Read More
        </LinkButton>
        {user && isAuthor && (
          <div className="flex flex-row gap-6">
            <LinkButton
              href={`/edit/${post.id}`}
              variant="default"
              size="default"
            >
              <img
                src="/pencil_icon.svg"
                alt="pencil_icon"
                role="img"
                className="w-6 h-8"
                aria-label="Pencil icon"
              />
            </LinkButton>
            <Button
              onClick={onDeleteBtnClick}
              variant="default"
              size="default"
            >
              <img
                src="/delete_icon.svg"
                alt="delete_icon"
                role="img"
                className="w-6 h-8"
                aria-label="Delete icon"
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;
