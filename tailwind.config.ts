import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#0087ff',  // Main blue
          600: '#006ccc',
          700: '#005199',
          800: '#003666',
          900: '#001b33',
        },
      },
      fontFamily: {
        kanit: ['var(--font-kanit)'],
      },
    },
  },
  plugins: [],
};

export default config;
