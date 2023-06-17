import { UserSnapshot } from '@user/models'

export interface AuthTokensModel {
  accessToken: string
  refreshToken: string
}

export interface AuthCreateUserSnapshot {
  user: UserSnapshot
  accessToken: string
  refreshToken: string
}

export interface AuthTokenPayload {
  uid: string
}

export interface AuthCreateUserParams {
  login: string
  email: string
  password: string
}

export interface AuthLoginUserParams {
  login: string
  password: string
}

export interface AuthRules {
  id: string
  title: string
  content: Array<{ id: string; text: string }>
}
