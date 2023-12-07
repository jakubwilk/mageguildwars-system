import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['pl'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
})

export const config = {
  matcher: ['/', '/(pl)/:path*'],
}
