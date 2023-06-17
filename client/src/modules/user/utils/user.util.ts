import { UserGroup } from '@user'
import i18n from 'i18next'
import { isNil } from 'lodash'

export const convertUserGroupToText = (group: UserGroup | undefined): string => {
  if (isNil(group)) {
    return i18n.t('user:groups.none')
  }

  switch (group) {
    case UserGroup.USER:
      return i18n.t('user:groups.user')
    case UserGroup.BANNED:
      return i18n.t('user:groups.banned')
    case UserGroup.MODERATOR:
      return i18n.t('user:groups.moderator')
    case UserGroup.OPERATOR:
      return i18n.t('user:groups.operator')
    default:
      return i18n.t('user:groups.none')
  }
}
