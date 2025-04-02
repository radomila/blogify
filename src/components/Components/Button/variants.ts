import { cva } from 'class-variance-authority';

export const buttonVariants = cva('flex items-center justify-center gap-1 cursor-pointer', {
  variants: {
    variant: {
      default: '',
      form: 'text-white bg-blue-600 hover:bg-blue-700',
      detail: 'text-blue-600 bg-white outline-2 font-medium',
      create: 'text-white bg-blue-600 font-medium',
      error: 'text-white bg-[#EB0000]',
      errorSecondary: 'text-[#EB0000] bg-white outline-1 outline-[#EB0000] font-medium',
      upload: 'text-white bg-blue-600',
      uploadSecondary: 'text-blue-600 bg-white outline-1 outline-blue-600',
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
