export interface AuthContextType {
  isUser: boolean
  user: object | null
  setIsUser: (v: boolean) => void
  setUser: (v: object | null) => void
}
