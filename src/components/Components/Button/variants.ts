import { cva } from 'class-variance-authority';

export const buttonVariants = cva('flex items-center justify-center gap-1 cursor-pointer', {
  variants: {
    variant: {
      form: 'text-white bg-blue-500 hover:bg-blue-600',
      detail: 'text-blue-500 bg-white outline-2 font-medium',
      create: 'text-white bg-blue-500 font-medium',
    },
    size: {
      form: 'h-[35px] w-xs px-4 py-1 rounded-md tracking-wider',
      detail: 'px-5 py-2',
    },
  },
});
