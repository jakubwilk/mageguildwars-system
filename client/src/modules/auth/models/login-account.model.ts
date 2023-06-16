import { UserSnapshot } from '@user'
import i18n from 'i18next'
import * as Yup from 'yup'

export interface LoginAccountFormFields {
  login: string
  password: string
}

export interface LoginAccountRequestParams {
  login: string
  password: string
}

export interface LoginAccountResponseSnapshot {
  refreshToken: string
  user: UserSnapshot
}

export const LOGIN_ACCOUNT_INITIAL_VALUES: LoginAccountFormFields = {
  login: '',
  password: '',
}

export const loginSchema = Yup.object().shape({
  login: Yup.string().required(i18n.t('validation:fieldIsRequired') as string),
  password: Yup.string().required(i18n.t('validation:fieldIsRequired') as string),
})
