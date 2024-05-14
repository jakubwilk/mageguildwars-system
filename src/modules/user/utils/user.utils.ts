import { ISelectOption } from 'common/models'
import { IAccountsListFilters, UserGroupEnum } from 'user/models'

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

export const DEFAULT_USERS_FILTERS: IAccountsListFilters = {
  page: 1,
  size: 10,
  sort: {
    id: 1,
    label: 'Rosnąco',
    value: 'asc',
  },
  sortBy: {
    id: 1,
    label: 'Data rejestracji',
    value: 'registerDate',
  },
}

export const USER_GROUP_OPTIONS: ISelectOption[] = [
  {
    id: 1,
    label: 'Zbanowany',
    value: UserGroupEnum.BANNED,
  },
  {
    id: 2,
    label: 'Użytkownik',
    value: UserGroupEnum.USER,
  },
  {
    id: 3,
    label: 'Operator',
    value: UserGroupEnum.OPERATOR,
  },
  {
    id: 4,
    label: 'Administrator',
    value: UserGroupEnum.ROOT,
  },
]

export const ACCOUNT_SORT_OPTIONS: ISelectOption[] = [
  { id: 1, label: 'Nazwa powiązana', value: 'slug' },
  { id: 2, label: 'Data rejestracji', value: 'registerDate' },
  { id: 3, label: 'Grupa', value: 'group' },
  { id: 4, label: 'Czy konto jest aktywne', value: 'isBlocked' },
  { id: 5, label: 'Czy konto jest zbanowane', value: 'isBanned' },
]
