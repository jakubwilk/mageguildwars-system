import { useContext } from 'react'

import { UserContext } from '../context'

export const useUserContext = () => {
  const { user, addUser, clearUser } = useContext(UserContext)

  return { user, addUser, clearUser }
}
