'use client'

import { TQueryOptions } from '@config'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const getUser = async (uid: string) => {
  const { data } = await axios.get(`https://localhost:8080/api/user/${uid}`, {
    withCredentials: true,
  })

  return data
}

const useGetUserQuery = (uid: string, options?: TQueryOptions) => {
  return useQuery({ queryKey: ['GET_USER'], queryFn: () => getUser(uid), ...options })
}

export default useGetUserQuery
