import { Text } from '@radix-ui/themes';
import { Post } from '@/types/posts';
import LinkButton from '@/components/Components/Button/LinkButton';

interface Props {
  post: Post;
}

const PostCard = ({ post }: Props) => {
  const date = new Date(post.createdAt!);
  const month = date.toLocaleString('en-EN', { month: 'short' });
  const day = date.toLocaleString('en-EN', { day: '2-digit' });
  const year = date.toLocaleString('en-EN', { year: 'numeric' });
  const createdAtDate = `${month} ${day} ${year}`;

  return (
    <div className="flex flex-col p-3 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg hover:scale-105 w-[350px] h-[450px]">
      <div className="w-full h-[150px] bg-gray-300 mb-4"></div>
      <div className="flex flex-col flex-grow p-3">
        <Text
          as="p"
          size="4"
          mb="5"
          className="font-medium"
        >
          {post.title}
        </Text>
        <Text
          as="p"
          size="2"
          className="line-clamp-4"
        >
          {post.text}
        </Text>
      </div>
      <div className="flex justify-between items-center mt-4 p-3">
        <div className="font-medium text-gray-500">{createdAtDate}</div>
        <LinkButton
          href={`/${post.id}`}
          variant="detail"
          size="detail"
        >
          Read More
        </LinkButton>
      </div>
    </div>
  );
};

export default PostCard;
