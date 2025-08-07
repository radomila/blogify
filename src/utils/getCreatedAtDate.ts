import { Post } from '@/types/posts';

export function getCreatedAtDate(post: Post) {
  const date = new Date(post.createdAt!);
  const month = date.toLocaleString('en-EN', { month: 'short' });
  const day = date.toLocaleString('en-EN', { day: '2-digit' });
  const year = date.toLocaleString('en-EN', { year: 'numeric' });
  return `${month} ${day} ${year}`;
}
