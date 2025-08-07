import { VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';
import { mergeClassNames } from '@/utils/mergeClassNames';
import { buttonVariants } from '@/components/core/Button/variants';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = ({ variant, size, children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={mergeClassNames(buttonVariants({ variant, size, className }))}
      {...props}
      role="button"
    >
      {children}
    </button>
  );
};

export default Button;
