import { useMutation } from '@tanstack/react-query'
import { AuthApiKeysEnum, IRegisterRequestValues } from 'auth/models'
import { TMutationOptions } from 'common/models'
import { api } from 'config'

const createAccount = async (values: IRegisterRequestValues) => {
  const { data } = await api.put('v1/auth', values)

  return data
}

export function useRegisterMutation(
  options: TMutationOptions<IRegisterRequestValues> = {},
) {
  return useMutation({
    mutationKey: [AuthApiKeysEnum.CREATE_ACCOUNT],
    mutationFn: createAccount,
    ...options,
  })
}
