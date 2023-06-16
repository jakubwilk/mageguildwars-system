import { MIN_PASSWORD_LENGTH } from '@common'
import { UserSnapshot } from '@user'
import i18n from 'i18next'
import * as Yup from 'yup'

export interface CreateAccountFormFields {
  login: string
  email: string
  password: string
  repeatPassword: string
}

export interface CreateAccountRequestParams {
  login: string
  email: string
  password: string
}

export interface CreateAccountResponseSnapshot {
  refreshToken: string
  user: UserSnapshot
}

export const CREATE_ACCOUNT_INITIAL_VALUES: CreateAccountFormFields = {
  login: '',
  email: '',
  password: '',
  repeatPassword: '',
}

export const createAccountSchema = Yup.object().shape({
  login: Yup.string().required(i18n.t('validation:fieldIsRequired') as string),
  email: Yup.string()
    .email(i18n.t('validation:wrongEmailAddress') as string)
    .required(i18n.t('validation:fieldIsRequired') as string),
  password: Yup.string()
    .min(
      MIN_PASSWORD_LENGTH,
      i18n.t('validation:fieldShouldContainAtLeastCharacters', {
        field: i18n.t('auth:field.password'),
        characters: MIN_PASSWORD_LENGTH,
      }) as string
    )
    .required(i18n.t('validation:fieldIsRequired') as string),
  repeatPassword: Yup.string()
    .required(i18n.t('validation:fieldIsRequired') as string)
    .test('checkIfPasswordsAreTheSame', i18n.t('validation:passwordAreNotTheSame') as string, function (this, repeatPassword) {
      return this.parent.password === repeatPassword
    }),
})
