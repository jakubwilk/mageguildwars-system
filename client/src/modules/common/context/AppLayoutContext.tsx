import { createContext, ReactNode, useMemo, useState } from 'react'
import { AppLayoutContextType } from '@common'

export const AppLayoutContext = createContext<AppLayoutContextType>({
  isHomePage: true,
  isSidebarOpen: false,
  isAuthModalOpen: false,
  setIsHomePage: () => {},
  setIsSidebarOpen: () => {},
  setIsAuthModalOpen: () => {},
})

interface IProps {
  children: ReactNode
}

function AppLayoutContextProvider({ children }: IProps) {
  const [isHomePage, setIsHomePage] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const values = useMemo(
    () => ({ isHomePage, isSidebarOpen, isAuthModalOpen, setIsHomePage, setIsSidebarOpen, setIsAuthModalOpen }),
    [isAuthModalOpen, isHomePage, isSidebarOpen]
  )

  return <AppLayoutContext.Provider value={values}>{children}</AppLayoutContext.Provider>
}

export default AppLayoutContextProvider
