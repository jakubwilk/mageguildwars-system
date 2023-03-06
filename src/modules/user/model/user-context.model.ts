export interface IUserContextData {
  id: string
  slug: string
  username: string
  title: string
  messagesCount: number
  notificationsCount: number
}

export interface IUserContext {
  user: IUserContextData
  setUser: (value: keyof IUserContextData | IUserContextData) => void
}

export const DEFAULT_CONTEXT_USER: IUserContextData = {
  id: '',
  slug: '',
  username: '',
  title: '',
  messagesCount: 0,
  notificationsCount: 0,
}
