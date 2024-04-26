import { useCallback, useMemo } from 'react'
import { List } from '@mantine/core'
import { IconClock, IconUser } from '@tabler/icons-react'
import { Button } from 'common/components'
import { closeUserSettingsModal } from 'common/store'
import { useDispatch } from 'config'
import { useResource } from 'resource/hooks'
import { userBooleanColor, userGroupColor } from 'user/utils'

import { UserInformationItem } from './UserInformationItem'

export function UserInformation() {
  const { getResource } = useResource('COMMON')
  const { getResource: getUserResource } = useResource('USER')
  const dispatch = useDispatch()

  const handleCloseUserSettingsModal = useCallback(
    () => dispatch(closeUserSettingsModal()),
    [dispatch],
  )

  const groupColor = useMemo(() => userGroupColor.get(2), [])

  const getBooleanColor = useCallback(
    (value: boolean) => userBooleanColor.get(value) || '',
    [],
  )

  return (
    <>
      <div className={'flex flex-col gap-4 mb-4'}>
        <List center size={'md'} spacing={'md'}>
          <UserInformationItem
            IconComponent={IconClock}
            badgeColor={'gray'}
            label={getUserResource('MODAL_SETTINGS_INFO_REGISTER_DATE_TEXT')}
            value={new Date()}
          />
          <UserInformationItem
            IconComponent={IconClock}
            badgeColor={'gray'}
            label={getUserResource('MODAL_SETTINGS_INFO_UPDATE_DATE_TEXT')}
            value={new Date()}
          />
          <UserInformationItem
            IconComponent={IconUser}
            badgeColor={getBooleanColor(true)}
            label={getUserResource('MODAL_SETTINGS_INFO_ACTIVE_BLOCK_TEXT')}
            value={true}
          />
          <UserInformationItem
            IconComponent={IconUser}
            badgeColor={groupColor || ''}
            label={getUserResource('MODAL_SETTINGS_INFO_USER_GROUP_TEXT')}
            value={'Operator'}
          />
          <UserInformationItem
            IconComponent={IconUser}
            badgeColor={getBooleanColor(true)}
            label={getUserResource('MODAL_SETTINGS_INFO_GAME_MASTER_PANEL_TEXT')}
            value={true}
          />
          <UserInformationItem
            IconComponent={IconUser}
            badgeColor={getBooleanColor(false)}
            label={getUserResource('MODAL_SETTINGS_INFO_CREATE_NEW_CHARACTERS_TEXT')}
            value={false}
          />
        </List>
      </div>
      <div className={'w-full flex justify-end items-center gap-4'}>
        <Button
          onClick={handleCloseUserSettingsModal}
          type={'button'}
          variant={'default'}
        >
          {getResource('ACTION_CLOSE_TEXT')}
        </Button>
      </div>
    </>
  )
}
