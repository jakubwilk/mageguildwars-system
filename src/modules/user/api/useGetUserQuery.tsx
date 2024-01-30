'use client'

import { TQueryOptions } from '@config'
import { getUser, IUser } from '@modules/user'
import { useQuery, UseQueryResult } from '@tanstack/react-query'

const useGetUserQuery = (uid: string, options?: TQueryOptions): UseQueryResult<IUser> => {
  return useQuery({ queryKey: ['GET_USER'], queryFn: () => getUser(uid), ...options })
}

export default useGetUserQuery
