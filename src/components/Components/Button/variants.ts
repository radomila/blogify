import { cva } from 'class-variance-authority';

export const buttonVariants = cva('flex items-center justify-center gap-1 cursor-pointer', {
  variants: {
    variant: {
      default: '',
      form: 'text-white bg-[#0045DB] font-medium',
      detail: 'text-[#0045DB] font-medium',
      create: 'text-white bg-[#0045DB] font-medium',
      error: 'text-white bg-[#EB0000]',
      errorSecondary: 'text-[#EB0000] bg-white outline-1 outline-[#EB0000] font-medium',
      upload: 'text-white bg-[#0045DB]',
      uploadSecondary: 'text-[#0045DB] bg-white outline-1 outline-[#0045DB]',
    },
    size: {
      default: '',
      form: 'h-[35px] w-xs px-4 py-1 rounded-md tracking-wider',
      detail: 'px-5 py-2',
      create: 'px-5 py-2 rounded-md',
      error: 'px-5 py-2 rounded-md tracking-wider',
      errorSecondary: 'px-5 py-2 rounded-md tracking-wider',
      upload: 'px-5 py-1 rounded-md tracking-wider',
      uploadSecondary: 'px-5 py-2 rounded-md tracking-wider',
    },
  },
});
