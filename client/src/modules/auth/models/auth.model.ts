export interface AuthContextType {
  isUser: boolean
  user: object | null
  setUser: (v: object | null) => void
}

export enum AUTH_METHOD_ENUM {
  // eslint-disable-next-line no-unused-vars
  LOGIN = 'LOGIN',
  // eslint-disable-next-line no-unused-vars
  REGISTER = 'REGISTER',
}
