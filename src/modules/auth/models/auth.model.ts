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
