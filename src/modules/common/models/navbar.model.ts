import { TablerIconsProps } from '@tabler/icons-react'

export interface IAppNavbar {
  slug: string
  name: string
  description: string
  url: string
  Icon: (props: TablerIconsProps) => JSX.Element
  isDisabled: boolean
}
