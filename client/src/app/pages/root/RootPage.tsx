import { Fragment, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import { LoginAccountDialog } from '@auth'
import { AppFooter, AppHeader, AppNavbar, useAppLayoutContext } from '@common'
import { FeaturePanels } from '@feature-panel'

function RootPage() {
  const { isSidebarOpen, isAuthModalOpen, setIsAuthModalOpen, setIsSidebarOpen } = useAppLayoutContext()

  const handleCloseLoginDialog = useCallback(() => setIsAuthModalOpen(false), [setIsAuthModalOpen])

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
        {isAuthModalOpen && <LoginAccountDialog isOpen={isAuthModalOpen} handleClose={handleCloseLoginDialog} />}
      </div>
    </Fragment>
  )
}

export default RootPage
