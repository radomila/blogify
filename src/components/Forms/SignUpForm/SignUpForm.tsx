'use client';

import { Form } from 'radix-ui';
import FormInputField from '@/components/FormComponents/Controlled/FormInputField';
import { useForm } from 'react-hook-form';
import { SignUpFormType } from '@/components/Forms/SignUpForm/signUpFormType';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpFormSchema } from '@/components/Forms/SignUpForm/signUpFormSchema';
import { register } from '@/services/AuthService';
import { useOverlayLoading } from '@/hooks/useOverlayLoading';
import PasswordInputField from '@/components/FormComponents/Controlled/PasswordInputField';
import { useRouter } from 'next/navigation';
import Button from '@/components/Components/Button/Button';
import { Heading } from '@radix-ui/themes';
import { useState } from 'react';
import ErrorAlert from '@/components/Components/ErrorAlert/ErrorAlert';

const SignUpForm = () => {
  const router = useRouter();
  const { showOverlay, hideOverlay } = useOverlayLoading();
  const { handleSubmit, control, trigger } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  });
  const [error, setError] = useState<string | null>(null);

  const handleFormOnSubmit = async ({ password, email }: SignUpFormType) => {
    setError(null);
    try {
      showOverlay();
      await register(email, password);
      router.push('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      hideOverlay();
    }
  };

  const textButton = 'Sign up';
  return (
    <div
      className="flex flex-col items-center text-center mt-10"
      aria-label="Sign up form"
    >
      <Heading
        as="h1"
        size="7"
        role="heading"
        aria-level={1}
      >
        Sign Up
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
          tooltipText="Password must be at least 8 characters long, containing at least one uppercase letter and number."
        />
        <PasswordInputField
          label="Confirm Password"
          isRequired
          control={control}
          name="confirmPassword"
          tooltipText="Re-enter the password exactly as in the previous field to confirm it."
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

export default SignUpForm;
