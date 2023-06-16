import { createContext, ReactNode, useMemo } from 'react'
import { AppConfigModelType, HelperNavigationType, MainNavigationType } from '@common'
import { isEmpty, isNil } from 'lodash'

export const AppConfigContext = createContext<AppConfigModelType>({
  helperNavigation: [],
  mainNavigation: [],
  isHelperNavigationLoading: false,
  isMainNavigationLoading: false,
})

interface IProps {
  children: ReactNode
  helperNavigation: Array<HelperNavigationType>
  mainNavigation: Array<MainNavigationType>
}

function AppConfigContextProvider({ children, helperNavigation, mainNavigation }: IProps) {
  const isHelperNavigationLoading = useMemo(() => isNil(helperNavigation) || isEmpty(helperNavigation), [helperNavigation])
  const isMainNavigationLoading = useMemo(() => isNil(mainNavigation) || isEmpty(mainNavigation), [mainNavigation])
  const values = useMemo(
    () => ({ helperNavigation, mainNavigation, isHelperNavigationLoading, isMainNavigationLoading }),
    [helperNavigation, isHelperNavigationLoading, isMainNavigationLoading, mainNavigation]
  )

  return <AppConfigContext.Provider value={values}>{children}</AppConfigContext.Provider>
}

export default AppConfigContextProvider
