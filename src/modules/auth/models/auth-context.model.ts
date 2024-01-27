import { TUserLite } from '@modules/user'

export interface IAuthContext {
  user: TUserLite | null
  setUser: (user: TUserLite | null) => void
}
