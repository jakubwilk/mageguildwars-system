import { boolean, object, ObjectSchema, string } from 'yup'

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
  login: string().required(),
  password: string().required(),
  isRemember: boolean().required(),
})

export const AUTH_LOGIN_VALUES: ILoginFormFields = {
  login: '',
  password: '',
  isRemember: false,
}

export const AUTH_REGISTER_SCHEMA: ObjectSchema<IRegisterFormFields> = object({
  login: string().required(),
  password: string().required(),
  email: string().email().required(),
})

export const AUTH_REGISTER_VALUES: IRegisterFormFields = {
  login: '',
  password: '',
  email: '',
}
