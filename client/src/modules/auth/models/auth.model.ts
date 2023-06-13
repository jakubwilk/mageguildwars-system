import { UserSnapshot } from '@user'

export interface AuthContextType {
  isUser: boolean
  user: UserSnapshot | null
  setUser: (v: UserSnapshot | null) => void
}

export enum AUTH_METHOD_ENUM {
  // eslint-disable-next-line no-unused-vars
  LOGIN = 'LOGIN',
  // eslint-disable-next-line no-unused-vars
  REGISTER = 'REGISTER',
}

export interface AuthRulesResponseSnapshot {
  id: string
  title: string
  content: Array<{ id: string; text: string }>
}
