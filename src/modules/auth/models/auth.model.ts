import { UserGroupEnum } from 'user/models'

export interface ILoginFormValues {
  login: string
  password: string
  isRemember?: boolean
}

export interface IRegisterFormValues {
  slug: string
  email: string
  password: string
  repeatPassword: string
}

export interface IRegisterRequestValues {
  slug: string
  email: string
  password: string
  group: number
}

export interface ILoginRequestValues {
  login: string
  password: string
  isRemember: boolean
}

export interface IRegisterAdminFormValues {
  slug: string
  email: string
  password: string
  group: UserGroupEnum
  limit: number
  isActive: boolean
}
