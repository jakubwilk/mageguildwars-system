export interface AuthContextType {
  isUser: boolean
  user: object | null
  setUser: (v: object | null) => void
}
