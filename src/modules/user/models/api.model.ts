import { IUsersListItem, UserGroupEnum } from './user.model'

export enum ApiKeysEnum {
  GET_ACCOUNTS = 'GET_ACCOUNTS',
  GET_ACCOUNT = 'GET_ACCOUNT',
  EDIT_ACCOUNT = 'EDIT_ACCOUNT',
  CREATE_ACCOUNT = 'CREATE_ACCOUNT',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  BAN_ACCOUNT = 'BAN_ACCOUNT',
  UNBAN_ACCOUNT = 'UNBAN_ACCOUNT',
  ACTIVATE_ACCOUNT = 'ACTIVATE_ACCOUNT',
}

export interface IAccountsListRequest {
  slug?: string
  registerDate?: Date | undefined
  group?: UserGroupEnum | undefined
  isBlocked?: boolean
  isBanned?: boolean
  page: number
  size: number
  sort: string
  sortBy: string
}

export interface IAccountsListResponse {
  data: IUsersListItem[]
  total: number
}
