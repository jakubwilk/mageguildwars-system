import { getTranslations } from 'next-intl/server'
import { AuthPage } from '@modules/auth'
import { AuthLayout } from '@modules/common'

interface IParams {
  params: { locale: string }
}

export const generateMetadata = async ({ params: { locale } }: IParams) => {
  const t = await getTranslations({ locale, namespace: 'auth' })

  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
  }
}

export default function Auth() {
  return (
    <AuthLayout>
      <AuthPage />
    </AuthLayout>
  )
}
