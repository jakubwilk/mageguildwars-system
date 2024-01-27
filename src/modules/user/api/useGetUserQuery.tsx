'use client'

import { TQueryOptions } from '@config'
import { getUser } from '@modules/user'
import { useQuery } from '@tanstack/react-query'

const useGetUserQuery = (uid: string, options?: TQueryOptions) => {
  return useQuery({ queryKey: ['GET_USER'], queryFn: () => getUser(uid), ...options })
}

export default useGetUserQuery
