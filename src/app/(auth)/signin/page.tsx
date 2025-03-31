import Link from 'next/link';
import SignInForm from '@/components/Forms/SignInForm/SignInForm';

const SignIn = () => {
  return (
    <div
      className="flex flex-col items-center gap-8"
      role="group"
      aria-label="Sign in form"
    >
      <SignInForm />
      <div className="text-lg">
        Does not have an account yet?
        <Link
          href="/signup"
          className="font-medium text-blue-600 pl-1"
          role="link"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
