import { useCallback } from 'react'
import { Button, Text } from '@mantine/core'
import { IconDoorEnter, IconUserPlus } from '@tabler/icons-react'
import clsx from 'clsx'

import { useDispatch } from '../../../app/config'
import { openLoginModal, openRegisterModal } from '../../common/store'
import { useResource } from '../../resource/hooks'

import classes from './Components.module.css'

interface IProps {
  handleCloseSidebar: () => void
}

export function GuestMenu({ handleCloseSidebar }: IProps) {
  const { getResource } = useResource('USER')
  const dispatch = useDispatch()

  const handleOpenLoginModal = useCallback(() => {
    dispatch(openLoginModal())
    handleCloseSidebar()
  }, [dispatch, handleCloseSidebar])

  const handleOpenRegisterModal = useCallback(() => {
    dispatch(openRegisterModal())
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
        {getResource('MENU_GUEST_TITLE')}
      </Text>
      <Button
        className={clsx('p-4 rounded-md', classes.menuItem)}
        classNames={{ label: classes.menuItemLabel }}
        onClick={handleOpenLoginModal}
        variant={'transparent'}
      >
        <IconDoorEnter className={classes.menuItemIcon} />
        <div className={'flex text-left flex-col pl-3 text-wrap'}>
          <Text className={classes.menuItemTextMain}>
            {getResource('MENU_LOGIN_TITLE_TEXT')}
          </Text>
          <Text className={clsx('lowercase', classes.menuItemSubText)}>
            {getResource('MENU_LOGIN_DESCRIPTION_TEXT')}
          </Text>
        </div>
      </Button>
      <Button
        className={clsx('p-4 rounded-md', classes.menuItem)}
        classNames={{ label: classes.menuItemLabel }}
        onClick={handleOpenRegisterModal}
        variant={'transparent'}
      >
        <IconUserPlus className={classes.menuItemIcon} />
        <div className={'flex text-left flex-col pl-3 text-wrap'}>
          <Text className={classes.menuItemTextMain}>
            {getResource('MENU_REGISTER_TITLE_TEXT')}
          </Text>
          <Text className={clsx('lowercase', classes.menuItemSubText)}>
            {getResource('MENU_REGISTER_DESCRIPTION_TEXT')}
          </Text>
        </div>
      </Button>
    </div>
  )
}
