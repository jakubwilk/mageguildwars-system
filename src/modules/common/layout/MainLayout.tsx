import { ReactNode, useEffect, useState } from 'react'
import { Overlay } from '@mantine/core'
import clsx from 'clsx'

import { Footer, SidebarWrapper } from '../components'

import '@mantine/core/styles/Overlay.layer.css'

interface IProps {
  children: ReactNode
}

export function MainLayout({ children }: IProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false)

  useEffect(() => {
    const body = document.querySelector('body')
    body?.classList.add('overflow-y-hidden')
  }, [])

  return (
    <main className={clsx('flex flex-row w-full relative overflow-hidden')}>
      <SidebarWrapper
        isSidebarExpanded={isSidebarExpanded}
        setIsSidebarExpanded={setIsSidebarExpanded}
      />
      {isSidebarExpanded && (
        <Overlay backgroundOpacity={0.35} blur={15} color={'#000'} zIndex={99} />
      )}
      <div
        className={clsx(
          'left-[70px] h-full w-[calc(100%-70px)] relative min-h-screen overflow-y-auto',
        )}
      >
        <div className={'container mx-auto px-4'}>{children}</div>
        <Footer />
      </div>
    </main>
  )
}
