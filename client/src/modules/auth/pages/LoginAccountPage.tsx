import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { AuthPageWrapper, LoginAccountForm } from '@auth'

function LoginAccountPage() {
  const { t } = useTranslation()

  return (
    <Fragment>
      <Helmet>
        <title>{t('auth:pages.login.title')}</title>
      </Helmet>
      <AuthPageWrapper>
        <LoginAccountForm />
      </AuthPageWrapper>
    </Fragment>
  )
}

export default LoginAccountPage
