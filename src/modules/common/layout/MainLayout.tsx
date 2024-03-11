import { ReactNode, useState } from 'react'
import { Overlay } from '@mantine/core'
import clsx from 'clsx'

import { Footer, SidebarWrapper } from '../components'

import '@mantine/core/styles/Overlay.layer.css'

interface IProps {
  children: ReactNode
}

export function MainLayout({ children }: IProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  return (
    <main className={clsx('flex flex-row w-full relative overflow-x-hidden')}>
      <SidebarWrapper
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
      />
      {isSidebarExpanded && (
        <Overlay backgroundOpacity={0.35} blur={15} color={'#000'} zIndex={99} />
      )}
      <div
        className={clsx('left-[70px] h-full w-[calc(100%-70px)] relative min-h-screen')}
      >
        <div className={'container mx-auto px-4'}>{children}</div>
        <Footer />
      </div>
    </main>
  )
}
