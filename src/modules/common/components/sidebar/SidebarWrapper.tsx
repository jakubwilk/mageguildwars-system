import { Drawer } from '@mantine/core'

import { SidebarMenu } from './SidebarMenu.tsx'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

export function SidebarWrapper({ isOpen, handleClose }: IProps) {
  return (
    <Drawer
      classNames={{ body: 'h-full' }}
      onClose={handleClose}
      opened={isOpen}
      withCloseButton={false}
    >
      <SidebarMenu handleClose={handleClose} />
    </Drawer>
  )
}
