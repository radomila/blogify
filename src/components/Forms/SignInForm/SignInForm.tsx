'use client';

import { Form } from 'radix-ui';
import FormInputField from '@/components/inputs/controlled/FormInputField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInFormType } from '@/components/forms/SignInForm/signInFormType';
import { signInFormSchema } from '@/components/forms/SignInForm/signInFormSchema';
import { useOverlayLoading } from '@/hooks/useOverlayLoading';
import PasswordInputField from '@/components/inputs/controlled/PasswordInputField';
import { useRouter } from 'next/navigation';
import Button from '@/components/core/Button/Button';
import { Heading } from '@radix-ui/themes';
import ErrorAlert from '@/components/core/ErrorAlert';
import { useAuth } from '@/hooks/useAuth';
import { useError } from '@/hooks/useError';

const SignInForm = () => {
  const router = useRouter();
  const { showOverlay, hideOverlay } = useOverlayLoading();
  const { handleSubmit, control, trigger } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
  });
  const { error, setError } = useError();
  const { signIn } = useAuth();

  const handleFormOnSubmit = async ({ password, email }: SignInFormType) => {
    setError(null);
    try {
      showOverlay();
      await signIn(email, password);
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      hideOverlay();
    }
  };

  const textButton = 'Sign in';
  return (
    <div
      className="flex flex-col items-center text-center mt-20"
      aria-label="Sign in form"
    >
      <Heading
        as="h1"
        size="7"
        role="heading"
        aria-level={1}
      >
        Sign In
      </Heading>
      {error && (
        <ErrorAlert
          error={error}
          showCloseButton={true}
          showHomeButton={true}
        />
      )}
      <Form.Root
        className="flex flex-col gap-8 mt-12 max-w-xs"
        onSubmit={handleSubmit(handleFormOnSubmit, (err) => console.error(err))}
      >
        <FormInputField
          label="Email"
          type="email"
          placeholder="name@example.com"
          isRequired
          control={control}
          name="email"
          tooltipText="Enter a valid email address in the format e.g. name@example.com"
        />
        <PasswordInputField
          label="Password"
          isRequired
          control={control}
          name="password"
          tooltipText="Please, enter the same password, which was used when signing up."
        />
        <Form.Submit asChild>
          <Button
            onClick={() => trigger()}
            variant="form"
            size="form"
            aria-label={textButton}
          >
            {textButton}
          </Button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default SignInForm;
