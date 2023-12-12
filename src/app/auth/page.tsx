import { AuthPage } from '@modules/auth'
import { AuthLayout } from '@modules/common'

export const generateMetadata = async () => {
  return {
    title: 'pageTitle', // t('pageTitle'),
    description: 'pageDescription', // t('pageDescription'),
  }
}

export default function Auth() {
  return (
    <AuthLayout>
      <AuthPage />
    </AuthLayout>
  )
}
