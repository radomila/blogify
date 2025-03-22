import { CommonDocumentProps } from '@/types/common';

export interface Post extends CommonDocumentProps {
  text: string;
  title: string;
}
