import { AuthPage } from '@modules/auth'
import { AuthLayout } from '@modules/common'
import { getTranslations } from '@modules/locale'

export const generateMetadata = async () => {
  const { translate } = getTranslations('auth')

  return {
    title: translate('pageTitle'),
    description: translate('pageDescription'),
  }
}

export default function Auth() {
  return (
    <AuthLayout>
      <AuthPage />
    </AuthLayout>
  )
}
