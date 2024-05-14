import { useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { Button, Text } from '@mantine/core'
import { IconDoorExit, IconUserCog, IconWorldCog } from '@tabler/icons-react'
import clsx from 'clsx'
import { useNotifications } from 'common/hooks'
import { openUserSettingsModal } from 'common/store'
import { routeKeys } from 'common/utils'
import { useDispatch, useSelector } from 'config'
import { isEqual } from 'lodash'
import { UserGroupEnum } from 'user/models'
import { clearUser } from 'user/store'

import classes from './../Components.module.css'

interface IProps {
  handleCloseSidebar: () => void
}

export function UserMenu({ handleCloseSidebar }: IProps) {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { account } = useSelector((state) => state.user)
  const { showNotificationSuccess } = useNotifications()

  const handleOpenSettingsModal = useCallback(() => {
    dispatch(openUserSettingsModal())
    handleCloseSidebar()
  }, [dispatch, handleCloseSidebar])

  const handleLogoutUser = useCallback(() => {
    dispatch(clearUser())
    showNotificationSuccess({
      message: t('notification:message.success.logout'),
    })
    handleCloseSidebar()
  }, [dispatch, showNotificationSuccess, t, handleCloseSidebar])

  const isRoot = useMemo(
    () => account && isEqual(account.group, UserGroupEnum.ROOT),
    [account],
  )

  return (
    <div className={'flex flex-col gap-2'}>
      <Text
        className={clsx(
          'flex justify-start items-center sticky top-0 lowercase',
          classes.title,
        )}
      >
        {t('user:menu.user')}
      </Text>
      <Button
        className={clsx('p-4 rounded-md', classes.menuItem)}
        classNames={{ label: classes.menuItemLabel }}
        onClick={handleOpenSettingsModal}
        variant={'transparent'}
      >
        <IconUserCog className={classes.menuItemIcon} />
        <div className={'flex text-left flex-col pl-3 text-wrap'}>
          <Text className={classes.menuItemTextMain}>{t('user:menu.settings')}</Text>
          <Text className={clsx('lowercase', classes.menuItemSubText)}>
            {t('user:menu.settings-description')}
          </Text>
        </div>
      </Button>
      {isRoot && (
        <NavLink
          className={({ isActive }) =>
            clsx(
              'flex items-center justify-start p-4 rounded-md',
              isActive ? classes.menuItemActive : classes.menuItem,
            )
          }
          onClick={handleCloseSidebar}
          to={routeKeys.ROOT_PANEL}
        >
          <IconWorldCog className={classes.menuItemIcon} width={36} />
          <div className={'flex flex-col ml-3'}>
            <Text className={classes.menuItemTextMain}>{t('user:menu.root')}</Text>
            <Text className={clsx('lowercase', classes.menuItemSubText)}>
              {t('user:menu.root-description')}
            </Text>
          </div>
        </NavLink>
      )}
      <Button
        className={clsx('p-4 rounded-md', classes.menuItem)}
        classNames={{ label: classes.menuItemLabel }}
        onClick={handleLogoutUser}
        variant={'transparent'}
      >
        <IconDoorExit className={classes.menuItemLogoutIcon} />
        <div className={'flex text-left flex-col pl-3 text-wrap'}>
          <Text className={classes.menuItemTextMain}>{t('user:menu.logout')}</Text>
          <Text className={clsx('lowercase', classes.menuItemSubText)}>
            {t('user:menu.logout-description')}
          </Text>
        </div>
      </Button>
    </div>
  )
}
