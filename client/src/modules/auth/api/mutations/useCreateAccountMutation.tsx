import { API } from '@auth'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

const createAccount = async () => {
  const { data } = await axios.post<{ isUser: boolean; user: object }>(API.createAccount, {}, { withCredentials: true })

  return { data }
}

function useCreateAccountMutation() {
  return useMutation(createAccount)
}

export default useCreateAccountMutation
