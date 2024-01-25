import { getTranslations } from '@modules/locale'
import { boolean, object, ObjectSchema, string } from 'yup'

const { translate } = getTranslations('auth')

export interface ILoginFormFields {
  login: string
  password: string
  isRemember: boolean
}

export interface IRegisterFormFields {
  login: string
  password: string
  email: string
}

export const AUTH_LOGIN_SCHEMA: ObjectSchema<ILoginFormFields> = object({
  login: string().required(translate('validation.loginIsRequired')),
  password: string().required(translate('validation.passwordIsRequired')),
  isRemember: boolean().required(),
})

export const AUTH_LOGIN_VALUES: ILoginFormFields = {
  login: '',
  password: '',
  isRemember: false,
}

export const AUTH_REGISTER_SCHEMA: ObjectSchema<IRegisterFormFields> = object({
  login: string().required(translate('validation.loginIsRequired')),
  password: string().required(translate('validation.passwordIsRequired')),
  email: string()
    .email(translate('validation.emailIsWrong'))
    .required(translate('validation.emailIsRequired')),
})

export const AUTH_REGISTER_VALUES: IRegisterFormFields = {
  login: '',
  password: '',
  email: '',
}
