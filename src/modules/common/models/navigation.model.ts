export interface ISiteNavigation {
  label: string
  href: string
  icon: JSX.Element
}

export interface IUserNavigation {
  isTitle: boolean
  label?: string
  href?: string
  icon?: JSX.Element
}
