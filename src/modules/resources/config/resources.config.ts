import { AuthResourcesEnum, CommonResourcesEnum, UserResourcesEnum } from '../constants'

export const getResources = () => ({
  COMMON: CommonResourcesEnum,
  AUTH: AuthResourcesEnum,
  USER: UserResourcesEnum,
})
