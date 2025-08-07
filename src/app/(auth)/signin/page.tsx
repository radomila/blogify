import Link from 'next/link';
import SignInForm from '@/components/forms/SignInForm/SignInForm';
import AuthLayout from '@/components/layout/AuthLayout';

const SignIn = () => {
  return (
    <AuthLayout ariaLabelText="Sign in section">
      <SignInForm />
      <div className="text-lg">
        Does not have an account yet?
        <Link
          href="/signup"
          className="font-medium text-primary pl-1"
          role="link"
        >
          Sign up
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
