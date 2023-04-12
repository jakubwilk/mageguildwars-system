import { axiosApi } from '@app/configs'
import { API, LoginAccountRequestParams, LoginAccountResponseSnapshot } from '@auth'
import { useMutation } from '@tanstack/react-query'

const loginAccount = async (params: LoginAccountRequestParams) => {
  const { data } = await axiosApi.post<LoginAccountResponseSnapshot>(API.loginAccount, params)

  return { data }
}

function useLoginAccountMutation() {
  return useMutation(loginAccount)
}

export default useLoginAccountMutation
