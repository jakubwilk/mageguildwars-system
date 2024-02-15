'use client'

import { TQueryOptions } from '@config'
import { getUserAutoLogin } from '@modules/auth'
import { useQuery } from '@tanstack/react-query'

const useUserAutoLoginQuery = (options?: TQueryOptions) => {
  return useQuery({
    queryKey: ['GET_USER_AUTO_LOGIN'],
    queryFn: () => getUserAutoLogin,
    ...options,
  })
}

export default useUserAutoLoginQuery
