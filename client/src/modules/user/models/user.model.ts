export interface UserGroup {
  BANNED: 'BANNED'
  USER: 'USER'
  MODERATOR: 'MODERATOR'
  OPERATOR: 'OPERATOR'
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
