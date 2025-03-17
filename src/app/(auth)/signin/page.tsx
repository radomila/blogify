import Link from "next/link";
import SignInForm from "@/components/SignInForm/SignInForm";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <SignInForm />
      <div className="text-lg">
        Does not have an account yet?
        <Link href="/signup" className="font-medium text-blue-500 pl-1">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
