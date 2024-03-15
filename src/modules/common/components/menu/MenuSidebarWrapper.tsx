import { Drawer } from '@mantine/core'

interface IProps {
  title?: string
  isOpen: boolean
  handleClose: () => void
}

export function MenuSidebarWrapper({
  title = 'Menu główne',
  isOpen,
  handleClose,
}: IProps) {
  return (
    <Drawer offset={16} onClose={handleClose} opened={isOpen} radius={'md'} title={title}>
      <div>{'test'}</div>
    </Drawer>
  )
}
