'use client'

import { useContext } from 'react'
import { AuthContext } from '@modules/auth'

const useAuthContext = () => {
  const { user, setUser } = useContext(AuthContext)

  return { user, setUser }
}

export default useAuthContext
