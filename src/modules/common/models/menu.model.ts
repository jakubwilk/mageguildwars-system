import { TablerIconsProps } from '@tabler/icons-react'

export interface IMainMenuItem {
  id: number
  label: string
  text: string
  url: string
  IconComponent: (props: TablerIconsProps) => JSX.Element
  isDisabled: boolean
}
