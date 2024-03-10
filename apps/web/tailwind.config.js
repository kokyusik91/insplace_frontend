const sharedConfig = require('@repo/tailwind-config/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...sharedConfig,
  content: [
    // ../../packages/ui/**/*.{js,ts,jsx,tsx}
    ...sharedConfig.content,
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
};
