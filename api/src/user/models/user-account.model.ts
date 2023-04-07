import { Group } from '@prisma/client'

export interface UserAccountSnapshot {
  id: number
  login: string
  slug: string
  email: string
  group: Group
  isActive: boolean
  isLocked: boolean
  createdAt: Date
  updatedAt: Date
}
