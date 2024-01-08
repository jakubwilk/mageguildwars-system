export enum AuthPageTabEnum {
  LOGIN = 'login',
  REGISTER = 'register',
}

export interface ILoginFormFields {
  login: string
  password: string
  isRemember: boolean
}
