import { createContext, ReactNode, useState } from 'react'
import { AppLayoutContextType } from '@common'

export const AppLayoutContext = createContext<AppLayoutContextType>({
  isHomePage: true,
  setIsHomePage: () => {},
})

interface IProps {
  children: ReactNode
}

function AppLayoutContextProvider({ children }: IProps) {
  const [isHomePage, setIsHomePage] = useState(true)

  return <AppLayoutContext.Provider value={{ isHomePage, setIsHomePage }}>{children}</AppLayoutContext.Provider>
}

export default AppLayoutContextProvider
