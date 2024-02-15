import { ReactNode } from 'react'

import { Footer, Header } from '../components'

interface IProps {
  children: ReactNode
}

export function MainLayout({ children }: IProps) {
  return (
    <div className={'container mx-auto px-4'}>
      <Header />
      <div className={'h-full min-h-[calc(100vh-180px)]'}>{children}</div>
      <Footer />
    </div>
  )
}
