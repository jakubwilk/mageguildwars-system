export type HelperNavigationType = {
  id: number
  href: string
  title: string
  name: string
  isDisabled: boolean
  isEnabledForLoggedUser: boolean
}

export type MainNavigationChildrenType = {
  id: string
  title: string
  label: string
  href: string
}

export type MainNavigationType = {
  id: string
  title: string
  children: Array<MainNavigationChildrenType>
}

export type AppConfigModelType = {
  helperNavigation: Array<HelperNavigationType>
  mainNavigation: Array<MainNavigationType>
  isHelperNavigationLoading: boolean
  isMainNavigationLoading: boolean
}
