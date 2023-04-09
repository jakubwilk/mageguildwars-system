import { axios } from '@app/configs'
import { API, CreateAccountRequestParams, CreateAccountResponseSnapshot } from '@auth'
import { useMutation } from '@tanstack/react-query'

const createAccount = async (params: CreateAccountRequestParams) => {
  const { data } = await axios.post<CreateAccountResponseSnapshot>(API.createAccount, params, { withCredentials: true })

  return { data }
}

function useCreateAccountMutation() {
  return useMutation(createAccount)
}

export default useCreateAccountMutation
