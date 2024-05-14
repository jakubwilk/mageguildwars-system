import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { List } from '@mantine/core'
import { IconClock, IconUser } from '@tabler/icons-react'
import { Button } from 'common/components'
import { closeUserSettingsModal } from 'common/store'
import { useDispatch, useSelector } from 'config'
import { userBooleanColor, userGroupColor, userGroupName } from 'user/utils'

import { UserInformationItem } from './UserInformationItem'

export function UserInformation() {
  const { t } = useTranslation()
  const { account } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleCloseUserSettingsModal = useCallback(
    () => dispatch(closeUserSettingsModal()),
    [dispatch],
  )

  const groupColor = useMemo(() => userGroupColor.get(account?.group || 0), [account])

  const getBooleanColor = useCallback(
    (value: boolean) => userBooleanColor.get(value) || '',
    [],
  )

  return (
    <>
      <div className={'flex flex-col gap-4 mb-4'}>
        {account && (
          <List center size={'md'} spacing={'md'}>
            <UserInformationItem
              IconComponent={IconClock}
              badgeColor={'gray'}
              label={t('user:value.register')}
              value={new Date(account.registerDate)}
            />
            <UserInformationItem
              IconComponent={IconClock}
              badgeColor={'gray'}
              label={t('user:value.update')}
              value={new Date(account.updateDate)}
            />
            <UserInformationItem
              IconComponent={IconUser}
              badgeColor={getBooleanColor(account.isBlocked)}
              label={t('user:value.active')}
              value={account.isBlocked}
            />
            <UserInformationItem
              IconComponent={IconUser}
              badgeColor={groupColor || ''}
              label={t('user:value.group')}
              value={userGroupName.get(account.group) || ''}
            />
            <UserInformationItem
              IconComponent={IconUser}
              badgeColor={getBooleanColor(account.hasGameMasterPanel)}
              label={t('user:value.game-master-panel')}
              value={account.hasGameMasterPanel}
            />
            <UserInformationItem
              IconComponent={IconUser}
              badgeColor={getBooleanColor(account.canCreateNewCharacters)}
              label={t('user:value.create-new-characters')}
              value={account.canCreateNewCharacters}
            />
          </List>
        )}
      </div>
      <div className={'w-full flex justify-end items-center gap-4'}>
        <Button
          onClick={handleCloseUserSettingsModal}
          type={'button'}
          variant={'default'}
        >
          {t('common:action.close')}
        </Button>
      </div>
    </>
  )
}
