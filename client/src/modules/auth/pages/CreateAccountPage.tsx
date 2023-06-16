import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

import { AuthPageWrapper, CreateAccountForm } from '../components'

function CreateAccountPage() {
  const { t } = useTranslation()

  return (
    <Fragment>
      <Helmet>
        <title>{t('auth:pages.register.title')}</title>
      </Helmet>
      <AuthPageWrapper>
        <CreateAccountForm />
      </AuthPageWrapper>
    </Fragment>
  )
}

export default CreateAccountPage
