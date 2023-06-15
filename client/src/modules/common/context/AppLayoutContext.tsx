import { createContext, ReactNode, useMemo, useState } from 'react'
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

  const values = useMemo(() => ({ isHomePage, setIsHomePage }), [isHomePage])

  return <AppLayoutContext.Provider value={values}>{children}</AppLayoutContext.Provider>
}

export default AppLayoutContextProvider
