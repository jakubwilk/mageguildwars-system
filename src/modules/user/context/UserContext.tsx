import { createContext, ReactNode, useCallback, useState } from 'react'
import { DEFAULT_CONTEXT_USER, IUserContext, IUserContextData } from '@user'

export const UserContext = createContext<IUserContext>({
  user: DEFAULT_CONTEXT_USER,
  setUser: (value: keyof IUserContextData | IUserContextData) => {},
})

interface IProps {
  children: ReactNode
}

function UserProvider({ children }: IProps) {
  const [user, setUser] = useState<IUserContextData>(DEFAULT_CONTEXT_USER)

  const handleSetUser = useCallback((value: string | number | IUserContextData, stateKey?: keyof IUserContextData) => {
    if (typeof value === 'object') {
      setUser(value)
    } else {
      setUser((prevState) => ({
        ...prevState,
        [stateKey as any]: value,
      }))
    }
  }, [])

  return <UserContext.Provider value={{ user, setUser: handleSetUser }}>{children}</UserContext.Provider>
}

export default UserProvider
