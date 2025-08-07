import DOMPurify from 'dompurify';
import { Post } from '@/types/posts';

export function getCleanPostText(post: Post) {
  return DOMPurify.sanitize(post?.text ?? '', { USE_PROFILES: { html: false } });
}
