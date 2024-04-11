import { useCallback } from 'react'
import { Button, Text } from '@mantine/core'
import { IconDoorEnter } from '@tabler/icons-react'
import clsx from 'clsx'

import { useDispatch } from '../../../app/config'
import { openLoginModal } from '../../common/store'

import classes from './Components.module.css'

interface IProps {
  handleCloseSidebar: () => void
}

export function GuestMenu({ handleCloseSidebar }: IProps) {
  const dispatch = useDispatch()

  const handleOpenLoginModal = useCallback(() => {
    dispatch(openLoginModal())
    handleCloseSidebar()
  }, [dispatch, handleCloseSidebar])

  return (
    <div className={'flex flex-col gap-2'}>
      <Text
        className={clsx('flex justify-start items-center sticky top-0', classes.title)}
      >
        {'menu gościa'}
      </Text>
      <Button
        className={clsx('p-4 rounded-md', classes.menuItem)}
        classNames={{ label: classes.menuItemLabel }}
        onClick={handleOpenLoginModal}
        variant={'transparent'}
      >
        <IconDoorEnter className={classes.menuItemIcon} />
        <div className={'flex text-left flex-col pl-3 text-wrap'}>
          <Text className={classes.menuItemTextMain}>{'Logowanie'}</Text>
          <Text className={clsx('lowercase', classes.menuItemSubText)}>
            {'Zaloguj się na konto by kontynuować rozgrywkę'}
          </Text>
        </div>
      </Button>
    </div>
  )
}
