import Link from "next/link";

const SignUp = () => {
  return (
    <>
      <p>Sign up page</p>
      <p>
        Already have an account? <Link href="/signin">Sign in</Link>.
      </p>
    </>
  );
};

export default SignUp;
