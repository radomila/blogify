import { cva } from 'class-variance-authority';

export const buttonVariants = cva('flex items-center justify-center gap-1 cursor-pointer', {
  variants: {
    variant: {
      default: '',
      form: 'text-white bg-blue-500 hover:bg-blue-600',
      detail: 'text-blue-500 bg-white outline-2 font-medium',
      create: 'text-white bg-blue-500 font-medium',
      error: 'text-white bg-[#E84A4A]',
      errorSecondary: 'text-[#E84A4A] bg-white outline-1 outline-[#E84A4A]',
      upload: 'text-white bg-blue-500',
      uploadSecondary: 'text-blue-500 bg-white outline-1 outline-blue-500',
    },
    size: {
      default: '',
      form: 'h-[35px] w-xs px-4 py-1 rounded-md tracking-wider',
      detail: 'px-5 py-2',
      error: 'px-5 py-1 tracking-wider',
      errorSecondary: 'px-5 py-2 tracking-wider',
      upload: 'px-5 py-1 tracking-wider',
      uploadSecondary: 'px-5 py-2 tracking-wider',
    },
  },
});
