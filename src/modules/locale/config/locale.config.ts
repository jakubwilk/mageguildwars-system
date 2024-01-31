import { get } from 'lodash'

import account from './../translations/account.json'
import auth from './../translations/auth.json'
import global from './../translations/global.json'
import profile from './../translations/profile.json'

export type TNamespace = 'auth' | 'global' | 'common' | 'profile' | 'account'

export const getNamespace = (namespace: TNamespace): Record<string, unknown> => {
  switch (namespace) {
    case 'auth':
      return auth
    case 'global':
      return global
    case 'profile':
      return profile
    case 'account':
      return account
    default:
      throw new Error(`Missing namespace: ${namespace}`)
  }
}

export const getTranslations = (namespace: TNamespace) => {
  const translate = (localeKey: string): string => {
    const translations = getNamespace(namespace)

    return get(translations, localeKey) as string
  }

  return { translate }
}
