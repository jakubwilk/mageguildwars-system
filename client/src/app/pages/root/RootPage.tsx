import { Outlet } from 'react-router-dom'
import { AppFooter, AppHeader, AppNavbar } from '@common'
import { FeaturePanels } from '@feature-panel'
import { useDisclosure } from '@mantine/hooks'

function RootPage() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div className={'relative min-h-screen'}>
      <AppHeader isOpen={opened} handleOpen={open} />
      <AppNavbar isOpen={opened} handleClose={close} />
      <FeaturePanels />
      <Outlet />
      <AppFooter />
    </div>
  )
}

export default RootPage
