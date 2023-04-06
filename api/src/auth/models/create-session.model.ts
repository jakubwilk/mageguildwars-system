import { UserAccountSnapshot } from '@user/models'

export interface CreateSessionUserData {
  id: string
  login: string
}

export interface CreateSessionUserSnapshot {
  token: string
  user: UserAccountSnapshot
}
