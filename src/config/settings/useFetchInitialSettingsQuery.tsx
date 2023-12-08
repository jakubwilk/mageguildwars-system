'use client'

import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const getFetchInitialSettings = async () => {
  const { data } = await axios.get('./data.json')

  return data
}

const useFetchInitialSettingsQuery = () => {
  return useQuery({ queryKey: ['INITIAL_DATA'], queryFn: getFetchInitialSettings })
}

export default useFetchInitialSettingsQuery
