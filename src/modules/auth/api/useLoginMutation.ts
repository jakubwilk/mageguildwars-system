import { useMutation } from '@tanstack/react-query'
import { AuthApiKeysEnum, ILoginRequestValues } from 'auth/models'
import { TMutationOptions } from 'common/models'
import { api } from 'config'

const loginAccount = async (values: ILoginRequestValues) => {
  const { data } = await api.post('v1/auth', values)

  return data
}

export function useLoginMutation(options: TMutationOptions<ILoginRequestValues> = {}) {
  return useMutation({
    mutationKey: [AuthApiKeysEnum.LOGIN_ACCOUNT],
    mutationFn: loginAccount,
    ...options,
  })
}
