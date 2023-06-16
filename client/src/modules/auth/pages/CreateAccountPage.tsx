import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

function CreateAccountPage() {
  const { t } = useTranslation()

  return (
    <Fragment>
      <Helmet>
        <title>{t('auth:pages.register.title')}</title>
      </Helmet>
    </Fragment>
  )
}

export default CreateAccountPage
