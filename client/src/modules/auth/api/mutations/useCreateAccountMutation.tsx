import { API, CreateAccountRequestParams } from '@auth'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const createAccount = async (params: CreateAccountRequestParams) => {
  const { data } = await axios.post<{ isUser: boolean; user: object }>(API.createAccount, params, { withCredentials: true })

  return { data }
}

function useCreateAccountMutation() {
  return useMutation(createAccount)
}

export default useCreateAccountMutation
