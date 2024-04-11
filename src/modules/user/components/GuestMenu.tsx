import { useCallback } from 'react'
import { Button, Text } from '@mantine/core'
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
        className={clsx(
          'flex justify-start items-center sticky top-0 mb-1',
          classes.title,
        )}
      >
        {'menu gościa'}
      </Text>
      <Button onClick={handleOpenLoginModal}>{'Logowanie'}</Button>
    </div>
  )
}
