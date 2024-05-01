import { UserGroupEnum } from 'user/models'

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
