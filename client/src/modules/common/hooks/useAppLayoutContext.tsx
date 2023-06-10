import { useContext } from 'react'
import { AppLayoutContext } from '@common'

function useAppLayoutContext() {
  const { isHomePage, isSidebarOpen, setIsHomePage, setIsSidebarOpen } = useContext(AppLayoutContext)

  return { isHomePage, isSidebarOpen, setIsHomePage, setIsSidebarOpen }
}

export default useAppLayoutContext
