import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-300': '#1475FC',
        'blue-400': '#007AFF',
        'blue-500': '#149AF8',
        'blue-900': '#142847',
      },
      screens: {
        xs: { max: '30em' }, //37.5em
        sm: { max: '37.50em' }, //37.5em
        md: { max: '56.25em' }, //56.25em
        lg: { max: '75em' }, //70em
        xl: { max: '90em' }, //88.75em
      },
    },
  },
  plugins: [],
};

export default config;
