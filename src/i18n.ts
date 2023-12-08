import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ locale }) => ({
  messages: {
    ...(await import(`../messages/${locale}/global.json`)).default,
    ...(await import(`../messages/${locale}/auth.json`)).default,
  },
}))
