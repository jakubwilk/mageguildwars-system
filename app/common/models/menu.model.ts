import type { IconProps } from '@tabler/icons-react'
import type { ComponentType } from 'react'

export interface IMenuItem {
  id: string | number
  link: string
  label?: string
  description?: string
  icon?: string
  tooltip?: string
  disabled?: boolean
  items?: IMenuItem[]
}

export type TIconComponent = ComponentType<IconProps>
