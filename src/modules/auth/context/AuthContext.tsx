'use client'
import { ReactNode, createContext, useCallback, useMemo, useState } from 'react'
import { IAuthContext } from '@modules/auth'

interface IProps {
  children: ReactNode
}

export const AuthContext = createContext<IAuthContext>({ user: null, setUser: () => {} })

const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState(null)

  const handleSetUser = useCallback((user: any) => setUser(user), [])

  const contextValues: IAuthContext = useMemo(
    () => ({ user, setUser: handleSetUser }),
    [user, handleSetUser],
  )

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
}

export default AuthProvider
