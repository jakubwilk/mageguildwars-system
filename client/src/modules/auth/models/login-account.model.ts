export interface LoginAccountForm {
  login: string
  password: string
}

export interface LoginAccountRequestParams {
  login: string
  password: string
}

export interface LoginAccountResponseSnapshot {
  refreshToken: string
  user: any
}

export const LOGIN_ACCOUNT_INITIAL_VALUES: LoginAccountForm = {
  login: '',
  password: '',
}
