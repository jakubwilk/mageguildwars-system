import { createContext, ReactNode, useState } from 'react'

import { AuthContextType } from '../models'

export const AuthContext = createContext<AuthContextType>({
  isUser: false,
  user: null,
  setIsUser: (v: boolean) => {},
  setUser: (v: object | null) => {},
})

interface IProps {
  children: ReactNode
}

function AuthContextProvider({ children }: IProps) {
  const [isUser, setIsUser] = useState(false)
  const [user, setUser] = useState<object | null>(null)

  return <AuthContext.Provider value={{ isUser, user, setIsUser, setUser }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
