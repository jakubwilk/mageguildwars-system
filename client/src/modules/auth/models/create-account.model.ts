export interface CreateAccountForm {
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

export const CREATE_ACCOUNT_INITIAL_VALUES: CreateAccountForm = {
  login: '',
  email: '',
  password: '',
  repeatPassword: '',
}