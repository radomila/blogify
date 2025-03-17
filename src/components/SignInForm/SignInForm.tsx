'use client';

import { Form } from 'radix-ui';
import FormInputField from '@/components/FormComponents/Controlled/FormInputField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignInFormType } from '@/components/SignInForm/signInFormType';
import { signInFormSchema } from '@/components/SignInForm/signInFormSchema';
import { signIn } from '@/services/AuthService';

const SignInForm = () => {
  const { handleSubmit, control, trigger } = useForm<SignInFormType>({
    resolver: zodResolver(signInFormSchema),
  });

  const handleFormOnSubmit = async ({ password, email }: SignInFormType) => {
    try {
      // TODO START LOADING
      await signIn(email, password);
      // TODO REDIRECT
      console.log('SIGNIN SUCCESS');
    } catch (err) {
      // TODO DISPLAY ERROR
      console.error(err);
    } finally {
      // TODO FINISH LOADING
      console.log('SIGNIN DONE');
    }
  };

  const textButton = 'sign in';
  return (
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
      <FormInputField
        label="Password"
        type="password"
        isRequired
        control={control}
        name="password"
        tooltipText="Password must be between 8–12 characters, containing at least one uppercase letter, number, and special character (@, #, !, etc.)."
      />
      <Form.Submit asChild>
        <button
          onClick={() => trigger()}
          className="box-border h-[35px] w-xs text-white text-center bg-blue-500 px-4 py-1 rounded-md tracking-wider cursor-pointer hover:bg-blue-600"
        >
          {textButton.toUpperCase()}
        </button>
      </Form.Submit>
    </Form.Root>
  );
};

export default SignInForm;
