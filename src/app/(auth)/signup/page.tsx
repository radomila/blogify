import Link from 'next/link';
import SignUpForm from '@/components/SignUpForm/SignUpForm';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <SignUpForm />
      <div className="text-lg">
        Already have an account?
        <Link
          href="/signin"
          className="font-medium text-blue-500 pl-1"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
