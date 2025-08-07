import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { mergeClassNames } from '@/utils/mergeClassNames';
import { buttonVariants } from '@/components/core/Button/variants';
import Link from 'next/link';

interface LinkButtonProps extends ComponentProps<typeof Link>, VariantProps<typeof buttonVariants> {}

const LinkButton = ({ variant, size, children, className, ...props }: LinkButtonProps) => {
  return (
    <Link
      className={mergeClassNames(buttonVariants({ variant, size, className }))}
      role="link"
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
