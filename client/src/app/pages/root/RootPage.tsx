import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import { AppFooter, AppHeader, AppNavbar, useAppLayoutContext } from '@common'
import { FeaturePanels } from '@feature-panel'

function RootPage() {
  const { isSidebarOpen, setIsSidebarOpen } = useAppLayoutContext()

  return (
    <Fragment>
      <Helmet>
        <title>{`Strona główna | Mage Guild Wars`}</title>
      </Helmet>
      <div className={'relative min-h-screen'}>
        <AppHeader isOpen={isSidebarOpen} handleOpen={() => setIsSidebarOpen(true)} />
        <AppNavbar isSidebarOpen={isSidebarOpen} handleOpenSidebar={() => setIsSidebarOpen(false)} />
        <FeaturePanels />
        <Outlet />
        <AppFooter />
      </div>
    </Fragment>
  )
}

export default RootPage
