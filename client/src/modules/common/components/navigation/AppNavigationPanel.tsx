import { Drawer } from '@mantine/core'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

function AppNavigationPanel({ isOpen, handleClose }: IProps) {
  return (
    <Drawer opened={isOpen} onClose={handleClose} title={'Nawigacja'}>
      <p>{'Tutaj jest nawigacja'}</p>
    </Drawer>
  )
}

export default AppNavigationPanel
