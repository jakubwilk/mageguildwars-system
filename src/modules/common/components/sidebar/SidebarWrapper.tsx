import { useCallback, useMemo, useState } from 'react'
import clsx from 'clsx'

import { SidebarMenu } from './SidebarMenu.tsx'

import classes from './Sidebar.module.css'

interface IProps {
  isSidebarExpanded: boolean
  setIsSidebarExpanded: (val: boolean) => void
}

export function SidebarWrapper({ isSidebarExpanded, setIsSidebarExpanded }: IProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const expandedClassName = useMemo(() => {
    if (isExpanded) {
      return 'w-[300px]'
    }

    return 'w-[70px]'
  }, [isExpanded])

  const handleExpandSidebar = useCallback(() => {
    setIsExpanded(!isExpanded)
    setIsSidebarExpanded(!isSidebarExpanded)
  }, [isExpanded, setIsSidebarExpanded, isSidebarExpanded])

  return (
    <aside
      className={clsx(
        'h-full p-4 fixed left-0 top-0 z-[100]',
        expandedClassName,
        classes.sidebar,
      )}
    >
      <SidebarMenu handleExpandSidebar={handleExpandSidebar} isExpanded={isExpanded} />
    </aside>
  )
}
