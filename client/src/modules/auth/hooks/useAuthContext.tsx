import { useContext } from 'react'
import { AuthContext } from '@auth'

function useAuthContext() {
  const { isUser, user, setUser } = useContext(AuthContext)

  return { isUser, user, setUser }
}

export default useAuthContext
