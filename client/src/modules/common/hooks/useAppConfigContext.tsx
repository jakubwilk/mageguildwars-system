import { useContext } from 'react'
import { AppConfigContext } from '@common'

function useAppConfigContext() {
  const { helperNavigation, isHelperNavigationLoading, mainNavigation, isMainNavigationLoading } = useContext(AppConfigContext)

  return { helperNavigation, isHelperNavigationLoading, mainNavigation, isMainNavigationLoading }
}

export default useAppConfigContext
