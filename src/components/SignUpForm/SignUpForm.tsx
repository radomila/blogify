'use client';

import { Form } from 'radix-ui';
import FormInputField from '@/components/FormComponents/Controlled/FormInputField';
import { useForm } from 'react-hook-form';
import { SignUpFormType } from '@/components/SignUpForm/signUpFormType';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpFormSchema } from '@/components/SignUpForm/signUpFormSchema';
import { register } from '@/services/AuthService';

const SignUpForm = () => {
  const { handleSubmit, control, trigger } = useForm<SignUpFormType>({
    resolver: zodResolver(signUpFormSchema),
  });

  const handleFormOnSubmit = async ({ password, email }: SignUpFormType) => {
    try {
      // TODO START LOADING
      await register(email, password);
      // TODO REDIRECT
      console.log('REGISTER SUCCESS');
    } catch (err) {
      // TODO DISPLAY ERROR
      console.error(err);
    } finally {
      // TODO FINISH LOADING
      console.log('REGISTER DONE');
    }
  };

  const textButton = 'sign up';
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
      <FormInputField
        label="Confirm Password"
        type="password"
        isRequired
        control={control}
        name="confirmPassword"
        tooltipText="Re-enter the password exactly as in the previous field to confirm it."
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

export default SignUpForm;
