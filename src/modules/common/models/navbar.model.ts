import { ReactNode } from 'react'

export interface IAppNavbar {
  slug: string
  name: string
  url: string
  icon?: ReactNode
  isDisabled: boolean
}
