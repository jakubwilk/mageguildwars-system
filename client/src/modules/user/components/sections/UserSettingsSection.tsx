import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { ChangePasswordDialog } from '@user'

function UserSettingsSection() {
  const { t } = useTranslation()
  return (
    <Fragment>
      <ChangePasswordDialog actionName={t('user:action.changePassword')} title={t('user:dialog.changePasswordTitle')} />
    </Fragment>
  )
}

export default UserSettingsSection
