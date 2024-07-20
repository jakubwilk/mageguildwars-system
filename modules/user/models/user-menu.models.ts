import { Icon } from '@tabler/icons-react'

export interface IMenuItem {
  id: number
  label: string
  title?: string
  href: string
  description?: string
  IconComponent?: Icon
}
