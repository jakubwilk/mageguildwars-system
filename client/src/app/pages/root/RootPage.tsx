import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import { AppFooter } from '@common'

function RootPage() {
  return (
    <Fragment>
      <Helmet>
        <title>{`Strona główna | Mage Guild Wars`}</title>
      </Helmet>
      <div className={'relative min-h-screen'}>
        <Outlet />
        <AppFooter />
      </div>
    </Fragment>
  )
}

export default RootPage
