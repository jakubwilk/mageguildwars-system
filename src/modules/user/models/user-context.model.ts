export interface IUserContextData {
  id: string
}

export interface IUserContext {
  user: IUserContextData | null
  addUser: (user: IUserContextData) => void
  clearUser: () => void
}

export const USER_INITIAL_CONTEXT: IUserContext = {
  user: null,
  addUser: () => {},
  clearUser: () => {},
}
