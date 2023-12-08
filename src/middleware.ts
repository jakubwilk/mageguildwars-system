import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['pl'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
})

export const config = {
  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)'
  ]
}
