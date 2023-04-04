export enum AuthActionsEnum {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REGISTER = 'REGISTER',
  FORGET_PASSWORD = 'FORGET_PASSWORD',
  NO_ACCESS = 'NO_ACCESS',
  ERROR_CODE = 'ERROR_CODE',
}

export interface AuthContextType {
  isUser: boolean
  user: object | null
  dispatchAction: (action: AuthActionsEnum) => void
}
