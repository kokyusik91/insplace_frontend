const sharedConfig = require('@repo/tailwind-config/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...sharedConfig,
  content: [
    // ../../packages/ui/**/*.{js,ts,jsx,tsx}
    ...sharedConfig.content,
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './index.html',
  ],
};
