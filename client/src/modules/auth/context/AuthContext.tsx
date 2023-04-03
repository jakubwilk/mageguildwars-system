import { createContext, ReactNode } from 'react'

export const AuthContext = createContext(null)

interface IProps {
  children: ReactNode
}

function AuthContextProvider({ children }: IProps) {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
