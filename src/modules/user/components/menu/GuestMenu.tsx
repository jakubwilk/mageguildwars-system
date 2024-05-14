import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text } from '@mantine/core'
import { IconDoorEnter, IconUserPlus } from '@tabler/icons-react'
import clsx from 'clsx'
import { openLoginModal, openRegisterModal } from 'common/store'
import { useDispatch } from 'config'

import classes from './../Components.module.css'

interface IProps {
  handleCloseSidebar: () => void
}

export function GuestMenu({ handleCloseSidebar }: IProps) {
  const { t } = useTranslation()
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
        {t('user:menu.guest')}
      </Text>
      <Button
        className={clsx('p-4 rounded-md', classes.menuItem)}
        classNames={{ label: classes.menuItemLabel, inner: 'justify-start' }}
        onClick={handleOpenLoginModal}
        variant={'transparent'}
      >
        <IconDoorEnter className={classes.menuItemIcon} />
        <div className={'flex text-left flex-col pl-3 text-wrap'}>
          <Text className={classes.menuItemTextMain}>{t('user:menu.login')}</Text>
          <Text className={clsx('lowercase', classes.menuItemSubText)}>
            {t('user:menu.login-description')}
          </Text>
        </div>
      </Button>
      <Button
        className={clsx('p-4 rounded-md', classes.menuItem)}
        classNames={{ label: classes.menuItemLabel, inner: 'justify-start' }}
        onClick={handleOpenRegisterModal}
        variant={'transparent'}
      >
        <IconUserPlus className={classes.menuItemIcon} />
        <div className={'flex text-left flex-col pl-3 text-wrap'}>
          <Text className={classes.menuItemTextMain}>{t('user:menu.register')}</Text>
          <Text className={clsx('lowercase', classes.menuItemSubText)}>
            {t('user:menu.register-description')}
          </Text>
        </div>
      </Button>
    </div>
  )
}
