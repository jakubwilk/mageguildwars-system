import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

import { IUserContext, IUserContextData, USER_INITIAL_CONTEXT } from '../models'

export const UserContext = createContext<IUserContext>(USER_INITIAL_CONTEXT)

interface IProps {
  children: ReactNode
}

export function UserProvider({ children }: IProps) {
  const [user, setUser] = useState<IUserContextData | null>(null)

  const handleSetUser = useCallback((user: IUserContextData) => setUser(user), [])

  const handleClearUser = useCallback(() => setUser(null), [])

  const values = useMemo(
    () => ({
      user,
      addUser: handleSetUser,
      clearUser: handleClearUser,
    }),
    [handleClearUser, handleSetUser, user],
  )

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}
