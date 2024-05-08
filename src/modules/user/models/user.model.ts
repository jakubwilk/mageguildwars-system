export enum UserSettingsTabEnum {
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CHANGE_EMAIL = 'CHANGE_EMAIL',
  INFORMATION = 'INFORMATION',
}

export interface IChangeEmailFormValues {
  currentEmail: string
  newEmail: string
}

export interface IChangePasswordFormValues {
  currentPassword: string
  newPassword: string
}

export interface IAccount {
  registerDate: Date
  updateDate: Date
  group: number
  isBlocked: boolean
  hasGameMasterPanel: boolean
  canCreateNewCharacters: boolean
}

export enum UserGroupEnum {
  BANNED = 0,
  USER = 1,
  OPERATOR = 2,
  ROOT = 3,
}

export interface IUsersListItem {
  id: number
  slug: string
  registerDate: Date
  group: UserGroupEnum
  isBlocked: boolean
  isBanned: boolean
  characters: number
}

export interface IAccountsListRequest {
  slug?: string
  registerDate?: Date | null
  group?: UserGroupEnum | null
  isBlocked?: boolean
  isBanned?: boolean
  page: number
  size: number
  sort: string
  sortBy: string
}

export enum UsersTabEnum {
  ACCOUNTS = 'ACCOUNTS',
  CHARACTERS = 'CHARACTERS',
}
