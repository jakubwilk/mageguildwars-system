import { Profile as ProfileModel } from '@prisma/client'
import { UserSnapshot } from '@user/models'

export interface AuthTokensModel {
  accessToken: string
  refreshToken: string
}

export interface AuthCreateUserSnapshot {
  user: UserSnapshot
  profiles: Array<ProfileModel>
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
