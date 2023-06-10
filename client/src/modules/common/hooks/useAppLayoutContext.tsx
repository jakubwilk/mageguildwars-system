import { useContext } from 'react'
import { AppLayoutContext } from '@common'

function useAppLayoutContext() {
  const { isHomePage, isSidebarOpen, isAuthModalOpen, setIsHomePage, setIsSidebarOpen, setIsAuthModalOpen } = useContext(AppLayoutContext)

  return { isHomePage, isSidebarOpen, isAuthModalOpen, setIsHomePage, setIsSidebarOpen, setIsAuthModalOpen }
}

export default useAppLayoutContext
