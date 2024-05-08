import { ForwardRefExoticComponent, RefAttributes } from 'react'
import { Icon, IconProps } from '@tabler/icons-react'

export interface IMainMenuItem {
  id: number
  label: string
  text: string
  url: string
  IconComponent: ForwardRefExoticComponent<Omit<IconProps, 'ref'> & RefAttributes<Icon>>
  isDisabled: boolean
}
