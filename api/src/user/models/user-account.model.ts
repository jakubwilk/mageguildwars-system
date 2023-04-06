import { Group } from '@user/models'

export interface UserAccountSnapshot {
  login: string
  slug: string
  email: string
  group: Group
  isActive: boolean
  isLocked: boolean
  createdAt: Date
  updatedAt: Date
}
