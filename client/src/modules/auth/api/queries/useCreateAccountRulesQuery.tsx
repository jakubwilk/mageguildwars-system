import { axiosApi } from '@app/configs'
import { AuthRulesResponseSnapshot } from '@auth'
import { useQuery } from '@tanstack/react-query'

import API from '../endpoint'

const getCreateAccountRules = async () => {
  const { data } = await axiosApi.get<Array<AuthRulesResponseSnapshot>>(API.authRules)

  return data
}

function useCreateAccountRulesQuery(options = {}) {
  return useQuery(['GET_CREATE_ACCOUNT_RULES'], getCreateAccountRules, { ...options })
}

export default useCreateAccountRulesQuery
