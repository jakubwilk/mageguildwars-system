import { UserGroup } from '@prisma/client'

export interface UserSnapshot {
  uid: string
  login: string
  slug: string
  email: string
  group: UserGroup
  isActive: boolean
  isLocked: boolean
  isCreateProfileEnabled: boolean
  isGameMasterProfileEnabled: boolean
  isGameMaster: boolean
  createdAt: Date
  updatedAt: Date
}
