import { axios } from '@app/configs'
import { API } from '@auth'
import { useMutation } from '@tanstack/react-query'

const logoutAccount = async (_: any) => {
  const { data } = await axios.get(API.logoutAccount, { withCredentials: true })

  return data
}

function useLogoutAccountMutation() {
  return useMutation(logoutAccount)
}

export default useLogoutAccountMutation
