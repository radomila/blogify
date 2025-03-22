import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { cn } from '@/utils/cn';
import { buttonVariants } from '@/components/Components/Button/variants';
import Link from 'next/link';

export interface LinkButtonProps extends ComponentProps<typeof Link>, VariantProps<typeof buttonVariants> {}

const LinkButton = ({ variant, size, children, className, ...props }: LinkButtonProps) => {
  return (
    <Link
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
