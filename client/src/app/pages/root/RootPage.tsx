import { Fragment, useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router-dom'
import { AppFooter, AppHeader, AppNavbar, BREAKPOINT, DesktopMenu } from '@common'
import { useViewportSize } from '@mantine/hooks'
import { UserMenuWrapper } from '@user'

function RootPage() {
  const { t } = useTranslation()
  const { width } = useViewportSize()

  const isDesktopView = useMemo(() => width >= BREAKPOINT.MD, [width])

  return (
    <Fragment>
      <Helmet>
        <title>{t('home:page.title')}</title>
      </Helmet>
      <div className={'relative min-h-full'}>
        <AppHeader children={<UserMenuWrapper />} />
        {isDesktopView && <AppNavbar children={<DesktopMenu />} isDesktopView />}
        <Outlet />
        <AppFooter />
        {!isDesktopView && <AppNavbar children={<Fragment />} isDesktopView={false} />}
      </div>
    </Fragment>
  )
}

export default RootPage
