import { ReactNode } from 'react'
import { Menu } from 'admin/components'
import { Header, Navbar } from 'common/components'

interface IProps {
  children: ReactNode
}

export default function RootLayout({ children }: Readonly<IProps>) {
  return (
    <>
      <Header />
      <Navbar />
      <div className={'px-4 md:px-8'}>
        <div className={'container mx-auto'}>
          <main className={'flex flex-row justify-start'}>
            <Menu />
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
