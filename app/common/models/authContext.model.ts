export interface IAuthContext {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: any | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: (user: any) => void
}
