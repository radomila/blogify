import { ChildrenProps } from '@/types/common';

interface Props extends ChildrenProps {
  ariaLabelText: 'Sign in section' | 'Sign up section';
}

const AuthLayout = ({ children, ariaLabelText }: Props) => {
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

export default AuthLayout;
