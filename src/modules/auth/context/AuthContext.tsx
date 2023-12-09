'use client'
import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'
import { IAuthContext } from '@modules/auth'

interface IProps {
  children: ReactNode
}

export const AuthContext = createContext<IAuthContext>({ user: false, setUser: () => {} })

const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<boolean>(false)

  const handleSetUser = useCallback((user: boolean) => setUser(user), [])

  const contextValues: IAuthContext = useMemo(
    () => ({ user, setUser: handleSetUser }),
    [user, handleSetUser],
  )

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
}

export default AuthProvider
