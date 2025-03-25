'use client';

import { Form } from 'radix-ui';
import FormInputField from '@/components/FormComponents/Controlled/FormInputField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInFormType } from '@/components/SignInForm/signInFormType';
import { signInFormSchema } from '@/components/SignInForm/signInFormSchema';
import { signIn } from '@/services/AuthService';
import { useOverlayLoading } from '@/hooks/useOverlayLoading';
import PasswordInputField from '@/components/FormComponents/Controlled/PasswordInputField';
import { useRouter } from 'next/navigation';
import Button from '@/components/Components/Button/Button';
import { Heading } from '@radix-ui/themes';

const SignInForm = () => {
  const router = useRouter();
  const { showOverlay, hideOverlay } = useOverlayLoading();
  const { handleSubmit, control, trigger } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
  });

  const handleFormOnSubmit = async ({ password, email }: SignInFormType) => {
    try {
      showOverlay();
      await signIn(email, password);
      router.push('/');
      console.log('SIGNIN SUCCESS');
    } catch (err) {
      // TODO DISPLAY ERROR
      console.error(err);
    } finally {
      hideOverlay();
      console.log('SIGNIN DONE');
    }
  };

  const textButton = 'sign in';
  return (
    <div
      className="text-center mt-20"
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
        <Form.Submit asChild>
          <Button
            onClick={() => trigger()}
            variant="form"
            size="form"
            aria-label="Sign in button"
          >
            {textButton.toUpperCase()}
          </Button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default SignInForm;
