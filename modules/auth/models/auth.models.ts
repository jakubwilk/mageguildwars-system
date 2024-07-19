export interface IRegisterFormValues {
  email: string
  password: string
  repeatPassword: string
}

export interface ILoginFormValues {
  email: string
  password: string
  shouldRemember?: boolean
}
