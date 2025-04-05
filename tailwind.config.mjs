import { mauve, violet, red, blackA, gray } from '@radix-ui/colors';

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  //content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  // plugins: {
  //   '@tailwindcss/postcss': {},
  // },
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
        ...red,
        ...blackA,
        ...gray,
        background: '#F5F7FF',
        foreground: '#171717',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
};
