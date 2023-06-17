import { useMemo } from 'react'
import { useAuthContext } from '@auth'
import { BREAKPOINT } from '@common'
import { useViewportSize } from '@mantine/hooks'
import { GuestMenu, HelperMenu, UserMenu } from '@user'

function UserMenuWrapper() {
  const { isUser } = useAuthContext()
  const { width } = useViewportSize()

  const isDesktopView = useMemo(() => width >= BREAKPOINT.MD, [width])

  return (
    <div className={'flex justify-between items-center'}>
      {isDesktopView && <HelperMenu />}
      {isUser ? <UserMenu /> : <GuestMenu />}
    </div>
  )
}

export default UserMenuWrapper
