import { UserSnapshot } from '@user'

export interface AuthContextType {
  isUser: boolean
  user: UserSnapshot | null
  setUser: (v: UserSnapshot | null) => void
}

export interface AuthRulesResponseSnapshot {
  id: string
  title: string
  content: Array<{ id: string; text: string }>
}

export type AuthRoutesType = {
  loginPage: () => string
  registerPage: () => string
  forgetPasswordPage: () => string
}
