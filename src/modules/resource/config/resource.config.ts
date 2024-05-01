import {
  AuthResourceEnum,
  CommonResourceEnum,
  NotificationResourceEnum,
  UserResourceEnum,
} from '../constants'

export const getResources = () => ({
  COMMON: CommonResourceEnum,
  NOTIFICATION: NotificationResourceEnum,
  AUTH: AuthResourceEnum,
  USER: UserResourceEnum,
})
