import { UserAccountSnapshot } from '@user/models'

export interface CreateSessionUserData {
  id: number
  login: string
}

export interface CreateSessionUserSnapshot {
  accessToken: string
  refreshToken: string
  user: UserAccountSnapshot
}
