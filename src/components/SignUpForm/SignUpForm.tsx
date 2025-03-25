'use client';

import { Form } from 'radix-ui';
import FormInputField from '@/components/FormComponents/Controlled/FormInputField';
import { useForm } from 'react-hook-form';
import { SignUpFormType } from '@/components/SignUpForm/signUpFormType';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpFormSchema } from '@/components/SignUpForm/signUpFormSchema';
import { register } from '@/services/AuthService';
import { useOverlayLoading } from '@/hooks/useOverlayLoading';
import PasswordInputField from '@/components/FormComponents/Controlled/PasswordInputField';
import { useRouter } from 'next/navigation';
import Button from '@/components/Components/Button/Button';
import { Heading } from '@radix-ui/themes';

const SignUpForm = () => {
  const router = useRouter();
  const { showOverlay, hideOverlay } = useOverlayLoading();
  const { handleSubmit, control, trigger } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  });

  const handleFormOnSubmit = async ({ password, email }: SignUpFormType) => {
    try {
      showOverlay();
      await register(email, password);
      router.push('/');
      console.log('REGISTER SUCCESS');
    } catch (err) {
      // TODO DISPLAY ERROR
      console.error(err);
    } finally {
      hideOverlay();
      console.log('REGISTER DONE');
    }
  };

  const textButton = 'sign up';
  return (
    <div
      className="text-center mt-10"
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
      <Form.Root
        className="flex flex-col gap-8 mt-12"
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
          tooltipText="Password must be between 8–12 characters, containing at least one uppercase letter, number, and special character (@, #, !, etc.)."
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
            aria-label="Sign up button"
          >
            {textButton.toUpperCase()}
          </Button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default SignUpForm;
