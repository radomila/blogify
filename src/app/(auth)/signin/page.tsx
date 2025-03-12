import Link from "next/link";

const SignIn = () => {
  return (
    <>
      <p>Sign in page</p>
      <p>
        Do not have an account yet? <Link href="/signup">Sign up</Link>.
      </p>
    </>
  );
};

export default SignIn;
