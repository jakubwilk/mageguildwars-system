import { MouseEvent } from 'react'
import { TablerIconsProps } from '@tabler/icons-react'

export type TUserMenuItemType = 'link' | 'button'

export interface IUserMenuItem {
  id: number
  label: string
  text: string
  type: TUserMenuItemType
  url?: string
  IconComponent?: (props: TablerIconsProps) => JSX.Element
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  imageUrl?: string
  isDisabled: boolean
}
