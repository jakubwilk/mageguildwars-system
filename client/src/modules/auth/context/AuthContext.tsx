import { createContext, ReactNode, useEffect, useState } from 'react'

import { AuthContextType } from '../models'

export const AuthContext = createContext<AuthContextType>({
  isUser: false,
  user: null,
  setUser: (v: object | null) => {},
})

interface IProps {
  children: ReactNode
}

function AuthContextProvider({ children }: IProps) {
  const [isUser, setIsUser] = useState(false)
  const [user, setUser] = useState<object | null>(null)

  useEffect(() => {
    setIsUser(user !== null)
  }, [user])

  return <AuthContext.Provider value={{ isUser, user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
