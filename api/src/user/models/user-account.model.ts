import { Group } from '@user/models'

export interface UserAccountSnapshot {
  id?: string
  login: string
  slug: string
  email: string
  group: Group
  isActive: boolean
  isLocked: boolean
  createdAt: Date
  updatedAt: Date
}
