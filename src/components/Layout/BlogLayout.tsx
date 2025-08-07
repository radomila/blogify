import { ChildrenProps } from '@/types/common';

interface Props extends ChildrenProps {
  ariaLabelText: 'Create blog post section' | 'Edit blog post section';
}

const BlogLayout = ({ children, ariaLabelText }: Props) => {
  return (
    <div
      className="flex flex-col items-center gap-8"
      role="group"
      aria-label={ariaLabelText}
    >
      {children}
    </div>
  );
};

export default BlogLayout;
