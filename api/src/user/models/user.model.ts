// import { UserGroup } from '@prisma/client'

export enum UsersGroup {
  // eslint-disable-next-line no-unused-vars
  BANNED = 'BANNED',
  // eslint-disable-next-line no-unused-vars
  USER = 'USER',
  // eslint-disable-next-line no-unused-vars
  MODERATOR = 'MODERATOR',
  // eslint-disable-next-line no-unused-vars
  OPERATOR = 'OPERATOR',
  // eslint-disable-next-line no-unused-vars
  ROOT = 'ROOT',
}

export interface UserSnapshot {
  uid: string
  login: string
  slug: string
  email: string
  group: UsersGroup
  isActive: boolean
  isLocked: boolean
  isCreateProfileEnabled: boolean
  createdAt: Date
  updatedAt: Date
}
