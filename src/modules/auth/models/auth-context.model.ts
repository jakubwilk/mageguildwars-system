import { IUser } from '@modules/user'

export interface IAuthContext {
  user: IUser | null
  setUser: (user: IUser | null) => void
}
