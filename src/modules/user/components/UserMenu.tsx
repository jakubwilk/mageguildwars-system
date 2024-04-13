import { useCallback } from 'react'
import { Button, Text } from '@mantine/core'
import { IconDoorExit, IconUserCog } from '@tabler/icons-react'
import clsx from 'clsx'
import { openUserSettingsModal } from 'common/store'
import { useDispatch } from 'config'
import { useResource } from 'resource/hooks'

import classes from './Components.module.css'

interface IProps {
  handleCloseSidebar: () => void
}

export function UserMenu({ handleCloseSidebar }: IProps) {
  const { getResource } = useResource('USER')
  const dispatch = useDispatch()

  const handleOpenSettingsModal = useCallback(() => {
    dispatch(openUserSettingsModal())
    handleCloseSidebar()
  }, [dispatch, handleCloseSidebar])

  return (
    <div className={'flex flex-col gap-2'}>
      <Text
        className={clsx(
          'flex justify-start items-center sticky top-0 lowercase',
          classes.title,
        )}
      >
        {getResource('MENU_USER_TITLE')}
      </Text>
      <Button
        className={clsx('p-4 rounded-md', classes.menuItem)}
        classNames={{ label: classes.menuItemLabel }}
        onClick={handleOpenSettingsModal}
        variant={'transparent'}
      >
        <IconUserCog className={classes.menuItemIcon} />
        <div className={'flex text-left flex-col pl-3 text-wrap'}>
          <Text className={classes.menuItemTextMain}>
            {getResource('MENU_SETTINGS_TITLE_TEXT')}
          </Text>
          <Text className={clsx('lowercase', classes.menuItemSubText)}>
            {getResource('MENU_SETTINGS_DESCRIPTION_TEXT')}
          </Text>
        </div>
      </Button>
      <Button
        className={clsx('p-4 rounded-md', classes.menuItem)}
        classNames={{ label: classes.menuItemLabel }}
        variant={'transparent'}
      >
        <IconDoorExit className={classes.menuItemLogoutIcon} />
        <div className={'flex text-left flex-col pl-3 text-wrap'}>
          <Text className={classes.menuItemTextMain}>
            {getResource('MENU_LOGOUT_TITLE_TEXT')}
          </Text>
          <Text className={clsx('lowercase', classes.menuItemSubText)}>
            {getResource('MENU_LOGOUT_DESCRIPTION_TEXT')}
          </Text>
        </div>
      </Button>
    </div>
  )
}
