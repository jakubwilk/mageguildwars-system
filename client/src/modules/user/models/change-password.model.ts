import { MIN_PASSWORD_LENGTH } from '@common'
import i18n from 'i18next'
import * as Yup from 'yup'

export interface ChangePasswordFormFields {
  oldPassword: string
  newPassword: string
  repeatNewPassword: string
}

export interface ChangePasswordRequestParams {
  userId: string
  newPassword: string
}

export const CHANGE_PASSWORD_INITIAL_VALUES: ChangePasswordFormFields = {
  oldPassword: '',
  newPassword: '',
  repeatNewPassword: '',
}

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required(i18n.t('validation:fieldIsRequired') as string),
  newPassword: Yup.string()
    .min(
      MIN_PASSWORD_LENGTH,
      i18n.t('validation:fieldShouldContainAtLeastCharacters', {
        field: i18n.t('auth:field.password'),
        characters: MIN_PASSWORD_LENGTH,
      }) as string
    )
    .required(i18n.t('validation:fieldIsRequired') as string),
  repeatNewPassword: Yup.string()
    .required(i18n.t('validation:fieldIsRequired') as string)
    .test('checkIfPasswordsAreTheSame', i18n.t('validation:passwordAreNotTheSame') as string, function (this, repeatNewPassword) {
      return this.parent.newPassword === repeatNewPassword
    }),
})
