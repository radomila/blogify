import Link from 'next/link';
import SignUpForm from '@/components/form/SignUpForm/SignUpForm';
import AuthLayout from '@/components/layouts/AuthLayout';

const SignUp = () => {
  return (
    <AuthLayout ariaLabelText="Sign up section">
      <SignUpForm />
      <div className="text-lg">
        Already have an account?
        <Link
          href="/signin"
          className="font-medium text-primary pl-1"
          role="link"
        >
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
