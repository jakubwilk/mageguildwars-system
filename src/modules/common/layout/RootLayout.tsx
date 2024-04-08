import { Outlet } from 'react-router-dom'

import { Footer, Header } from '../components'

interface IProps {
  showHeader?: boolean
  showFooter?: boolean
}

export function RootLayout({ showHeader = true, showFooter = true }: IProps) {
  return (
    <div className={'container mx-auto px-4'}>
      {showHeader && <Header />}
      <Outlet />
      {showFooter && <Footer />}
    </div>
  )
}
