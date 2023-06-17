export enum UserGroup {
  // eslint-disable-next-line no-unused-vars
  BANNED = 'BANNED',
  // eslint-disable-next-line no-unused-vars
  USER = 'USER',
  // eslint-disable-next-line no-unused-vars
  MODERATOR = 'MODERATOR',
  // eslint-disable-next-line no-unused-vars
  OPERATOR = 'OPERATOR',
}

export interface UserSnapshot {
  uid: string
  login: string
  slug: string
  email: string
  group: UserGroup
  isActive: boolean
  isLocked: boolean
  isCreateProfileEnabled: boolean
  isGameMaster: boolean
  createdAt: Date
  updatedAt: Date
}

export type UserRoutesType = {
  userDashboardPage: () => string
  userProfilePreviewPage: (slug: string) => string
}
