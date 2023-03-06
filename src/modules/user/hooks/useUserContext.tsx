import { useContext } from 'react'
import { IUserContext, UserContext } from '@user'

function useUserContext() {
  const { user, setUser } = useContext<IUserContext>(UserContext)

  return { user, setUser }
}

export default useUserContext
