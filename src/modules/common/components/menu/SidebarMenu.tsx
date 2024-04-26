import { Drawer } from '@mantine/core'
import { IconLayoutSidebarRightCollapse } from '@tabler/icons-react'
import { useResource } from 'resource/hooks'
import { GuestMenu, UserMenu } from 'user/components'
import { useValidateUser } from 'user/hooks'

import { MainMenu } from './MainMenu'

import classes from './Menu.module.css'

interface IProps {
  isOpen: boolean
  handleCloseSidebar: () => void
}

export function SidebarMenu({ isOpen, handleCloseSidebar }: IProps) {
  const { getResource } = useResource('COMMON')
  const { isUserLogged } = useValidateUser()

  return (
    <Drawer
      classNames={{ header: 'mb-1', title: classes.title }}
      closeButtonProps={{
        icon: <IconLayoutSidebarRightCollapse size={32} stroke={1.5} />,
        className: classes.close,
      }}
      offset={32}
      onClose={handleCloseSidebar}
      opened={isOpen}
      position={'right'}
      radius={'md'}
      title={getResource('MENU_MAIN_TITLE')}
    >
      <MainMenu />
      {isUserLogged ? (
        <UserMenu handleCloseSidebar={handleCloseSidebar} />
      ) : (
        <GuestMenu handleCloseSidebar={handleCloseSidebar} />
      )}
    </Drawer>
  )
}
