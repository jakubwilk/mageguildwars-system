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
