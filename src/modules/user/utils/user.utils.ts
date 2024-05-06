import { IAccountsListRequest, UserGroupEnum } from 'user/models'

export const userGroupColor = new Map([
  [0, 'dark'],
  [1, 'gray'],
  [2, 'orange'],
  [3, 'red'],
])

export const userBooleanColor = new Map([
  [true, 'green'],
  [false, 'blue'],
])

export const userGroupName = new Map([
  [UserGroupEnum.BANNED, 'Zbanowany'],
  [UserGroupEnum.USER, 'Użytkownik'],
  [UserGroupEnum.OPERATOR, 'Operator'],
  [UserGroupEnum.ROOT, 'Administrator'],
])

export const userGroupId = new Map([
  ['Zbanowany', UserGroupEnum.BANNED],
  ['Użytkownik', UserGroupEnum.USER],
  ['Operator', UserGroupEnum.OPERATOR],
  ['Administrator', UserGroupEnum.ROOT],
])

export const DEFAULT_USERS_FILTERS: IAccountsListRequest = {
  page: 1,
  size: 10,
}

export const USER_GROUP_OPTIONS: string[] = [
  userGroupName.get(UserGroupEnum.BANNED) as string,
  userGroupName.get(UserGroupEnum.USER) as string,
  userGroupName.get(UserGroupEnum.OPERATOR) as string,
  userGroupName.get(UserGroupEnum.ROOT) as string,
]
