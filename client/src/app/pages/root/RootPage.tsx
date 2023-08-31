import { useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { useViewportSize } from '@mantine/hooks'
import { AppLeftBar, HomeScreen } from '@modules/common'

function RootPage() {
  const { width } = useViewportSize()

  const isMobileWidth = useMemo(() => width < 992, [width])

  return (
    <main>
      <AppLeftBar />
      <div className={'w-auto ml-[70px]'}>
        <HomeScreen homeClassName={isMobileWidth ? 'min-h-[400px]' : 'min-h-[80vh]'} />
        <div className={'mx-auto container'}>
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default RootPage
