import { useMemo } from 'react'
import { useAuthContext } from '@auth'
import { BREAKPOINT } from '@common'
import { useViewportSize } from '@mantine/hooks'
import { GuestMenu, HelperMenu } from '@user'

function UserMenuWrapper() {
  const { isUser } = useAuthContext()
  const { width } = useViewportSize()

  const isDesktopView = useMemo(() => width >= BREAKPOINT.MD, [width])

  return (
    <div className={'flex justify-between items-center'}>
      {isDesktopView && <HelperMenu />}
      {isUser ? <p>{'DesktopMenu Uzytkownika'}</p> : <GuestMenu />}
    </div>
  )
}

export default UserMenuWrapper
