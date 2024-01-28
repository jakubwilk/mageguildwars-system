'use client'

import { useMemo } from 'react'
import { useAuthContext } from '@modules/auth'
import { isNil } from 'lodash'

const useUserHaveAccess = () => {
  const { user } = useAuthContext()

  const isUser = useMemo(() => !isNil(user), [user])

  return {
    isUserLogged: isUser,
  }
}

export default useUserHaveAccess
