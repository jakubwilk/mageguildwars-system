import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'
import { useMount } from 'react-use'

import { AuthActionsEnum, AuthContextType } from '../models'

export const AuthContext = createContext<AuthContextType>({
  isUser: false,
  user: null,
  dispatchAction: (value: AuthActionsEnum) => {},
})

interface IProps {
  children: ReactNode
}

function AuthContextProvider({ children }: IProps) {
  const [isUser, setIsUser] = useState(false)
  const [user, setUser] = useState<object | null>(null)

  const contextValue = useMemo(
    () => ({
      isUser,
      user,
    }),
    [isUser, user]
  )

  const dispatchAction = useCallback((action: AuthActionsEnum) => {
    switch (action) {
      case AuthActionsEnum.LOGIN:
        setIsUser(true)
        setUser({})
        break
      case AuthActionsEnum.LOGOUT:
      default:
        setIsUser(false)
        setUser({})
        break
    }
  }, [])

  useMount(() => {})

  return <AuthContext.Provider value={{ ...contextValue, dispatchAction }}>{children}</AuthContext.Provider>
}

export default AuthContextProvider
