import { Post } from '@/types/posts';
import DOMPurify from 'dompurify';

export function getFirstImageTag(post: Post) {
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
}
