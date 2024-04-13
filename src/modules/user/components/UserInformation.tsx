import { useCallback } from 'react'
import { List } from '@mantine/core'
import { IconClock, IconUser } from '@tabler/icons-react'
import { Button } from 'common/components'
import { closeUserSettingsModal } from 'common/store'
import { useDispatch } from 'config'
import { useResource } from 'resource/hooks'

import { UserInformationItem } from './UserInformationItem'

export function UserInformation() {
  const { getResource } = useResource('COMMON')
  const dispatch = useDispatch()

  const handleCloseUserSettingsModal = useCallback(
    () => dispatch(closeUserSettingsModal()),
    [dispatch],
  )

  return (
    <>
      <div className={'flex flex-col gap-4 mb-4'}>
        <List center size={'md'} spacing={'md'}>
          <UserInformationItem
            IconComponent={IconClock}
            badgeColor={'gray'}
            label={'Data rejestracji:'}
            value={new Date()}
          />
          <UserInformationItem
            IconComponent={IconClock}
            badgeColor={'gray'}
            label={'Data ostatniej aktualizacji:'}
            value={new Date()}
          />
          <UserInformationItem
            IconComponent={IconUser}
            badgeColor={'blue'}
            label={'Czy konto użytkownika posiada blokadę aktywacyjną:'}
            value={true}
          />
          <UserInformationItem
            IconComponent={IconUser}
            badgeColor={'red'}
            label={'Grupa:'}
            value={'Operator'}
          />
          <UserInformationItem
            IconComponent={IconUser}
            badgeColor={'blue'}
            label={'Czy użytkownik ma dostęp do panelu MG:'}
            value={true}
          />
          <UserInformationItem
            IconComponent={IconUser}
            badgeColor={'blue'}
            label={'Czy użytkownik może tworzyć nowe postacie:'}
            value={true}
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
