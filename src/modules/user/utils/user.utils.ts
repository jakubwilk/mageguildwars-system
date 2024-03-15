import { UserGroupEnum } from '../models/user.model.ts'

export const getUserGroupColor = (group: UserGroupEnum) => {
  switch (group) {
    case UserGroupEnum.USER:
      return 'gray'
    case UserGroupEnum.OPERATOR:
      return 'orange'
    case UserGroupEnum.ROOT:
      return 'red'
    case UserGroupEnum.BANNED:
    default:
      return 'dark'
  }
}
