'use client'
import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'
import { IAuthContext } from '@modules/auth'
import { TUserLite } from '@modules/user'

interface IProps {
  children: ReactNode
}

export const AuthContext = createContext<IAuthContext>({ user: null, setUser: () => {} })

const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<TUserLite | null>(null)

  const handleSetUser = useCallback((user: TUserLite | null) => setUser(user), [])

  const contextValues: IAuthContext = useMemo(
    () => ({ user, setUser: handleSetUser }),
    [user, handleSetUser],
  )

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
}

export default AuthProvider
