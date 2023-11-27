module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '540px',
        'mantine-breakpoint-sm': '720px',
        'mantine-breakpoint-md': '840px',
        'mantine-breakpoint-lg': '960px',
        'mantine-breakpoint-xl': '1180px',
      },
    },
  },
}
