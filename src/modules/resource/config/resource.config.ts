import { AuthResourceEnum, CommonResourceEnum, UserResourceEnum } from '../constants'

export const getResources = () => ({
  COMMON: CommonResourceEnum,
  AUTH: AuthResourceEnum,
  USER: UserResourceEnum,
})
