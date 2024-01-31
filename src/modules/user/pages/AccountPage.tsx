'use client'

import { useCallback, useMemo, useState } from 'react'
import { ActionIcon, Tooltip } from '@mantine/core'
import { useAuthContext } from '@modules/auth'
import { navbarStyles, PageWithTitle } from '@modules/common'
import { TUserLite, UserAccountDetails, UserAccountFormModeEnum } from '@modules/user'
import { IconEdit } from '@tabler/icons-react'
import { clsx } from 'clsx'

const AccountPage = () => {
  const { user } = useAuthContext()
  const [formMode, setFormMode] = useState<UserAccountFormModeEnum>(
    UserAccountFormModeEnum.VIEW_MODE,
  )

  const userData = useMemo(() => user as TUserLite, [user])

  const handleSwitchFormMode = useCallback(
    (formMode: UserAccountFormModeEnum) => setFormMode(formMode),
    [],
  )

  const EditButtonComponent = useMemo(
    () => (
      <Tooltip position={'bottom'} label={'Edytuj dane'}>
        <ActionIcon
          variant={'transparent'}
          color={'violet'}
          aria-label={'Edytuj dane'}
          className={clsx('ml-4', navbarStyles.mainNavbarItem)}
          onClick={() => handleSwitchFormMode(UserAccountFormModeEnum.FORM_MODE)}
        >
          <IconEdit style={{ width: '100%', height: '100%' }} stroke={1.5} />
        </ActionIcon>
      </Tooltip>
    ),
    [handleSwitchFormMode],
  )

  return (
    <PageWithTitle
      title={'Podgląd konta głównego'}
      additionalTitleRightSideContent={EditButtonComponent}
    >
      <UserAccountDetails user={userData} formMode={formMode} />
    </PageWithTitle>
  )
}

export default AccountPage
