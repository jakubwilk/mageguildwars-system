import { ReactNode } from 'react'
import { Drawer } from '@mantine/core'
import { IconLayoutSidebarRightCollapse } from '@tabler/icons-react'

import classes from './Menu.module.css'

interface IProps {
  isOpen: boolean
  children: ReactNode
  handleCloseSidebar: () => void
}

export function SidebarMenu({ isOpen, children, handleCloseSidebar }: IProps) {
  return (
    <Drawer
      closeButtonProps={{
        icon: <IconLayoutSidebarRightCollapse size={32} stroke={1.5} />,
        className: classes.close,
      }}
      offset={32}
      onClose={handleCloseSidebar}
      opened={isOpen}
      position={'right'}
      radius={'md'}
      title={'menu główne'}
    >
      {children}
    </Drawer>
  )
}
