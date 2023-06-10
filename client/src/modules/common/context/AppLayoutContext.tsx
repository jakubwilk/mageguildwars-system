import { createContext, ReactNode, useMemo, useState } from 'react'
import { AppLayoutContextType } from '@common'

export const AppLayoutContext = createContext<AppLayoutContextType>({
  isHomePage: true,
  isSidebarOpen: false,
  setIsHomePage: () => {},
  setIsSidebarOpen: () => {},
})

interface IProps {
  children: ReactNode
}

function AppLayoutContextProvider({ children }: IProps) {
  const [isHomePage, setIsHomePage] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const values = useMemo(() => ({ isHomePage, isSidebarOpen, setIsHomePage, setIsSidebarOpen }), [isHomePage, isSidebarOpen])

  return <AppLayoutContext.Provider value={values}>{children}</AppLayoutContext.Provider>
}

export default AppLayoutContextProvider
