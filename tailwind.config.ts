import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '48em',
      md: '62em',
      lg: '75em',
      xl: '88em',
    },
  },
  plugins: [],
} satisfies Config
