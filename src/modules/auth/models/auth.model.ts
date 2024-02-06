import { getTranslations } from '@modules/locale'
import { UserGroupEnum } from '@modules/user'
import { boolean, object, ObjectSchema, string } from 'yup'

const { translate } = getTranslations('auth')

export interface ILoginFormFields {
  email: string
  password: string
  isRemember: boolean
}

export interface IRegisterFormFields {
  email: string
  password: string
}

export interface ICreateUserRequest {
  email: string
  password: string
  group: UserGroupEnum
}

export const AUTH_LOGIN_SCHEMA: ObjectSchema<ILoginFormFields> = object({
  email: string().required(translate('validation.loginIsRequired')),
  password: string().required(translate('validation.passwordIsRequired')),
  isRemember: boolean().required(),
})

export const AUTH_LOGIN_VALUES: ILoginFormFields = {
  email: '',
  password: '',
  isRemember: false,
}

export const AUTH_REGISTER_SCHEMA: ObjectSchema<IRegisterFormFields> = object({
  password: string().required(translate('validation.passwordIsRequired')),
  email: string()
    .email(translate('validation.emailIsWrong'))
    .required(translate('validation.emailIsRequired')),
})

export const AUTH_REGISTER_VALUES: IRegisterFormFields = {
  email: '',
  password: '',
}
