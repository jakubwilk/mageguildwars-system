'use client'

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getFetchInitialSettings = async () => {
  const { data } = await axios.get('./data.json')

  return data
}

const useFetchInitialSettingsQuery = () => {
  return useQuery({ queryKey: ['INITIAL_DATA'], queryFn: getFetchInitialSettings })
}

export default useFetchInitialSettingsQuery
