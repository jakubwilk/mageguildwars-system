import { useMutation } from '@tanstack/react-query'

import { ApiManager, TMutationOptions } from '../../../../app/config'
import { IRegisterDataRequest } from '../../models'
import { API_AUTH_URL, ApiAuthKeysEnum } from '../config.ts'

const createAccount = async (body: IRegisterDataRequest) => {
  return await ApiManager.postRequest<object, IRegisterDataRequest>(API_AUTH_URL, body)
}

export const useCreateAccountMutation = (
  options: TMutationOptions<IRegisterDataRequest> = {},
) => {
  return useMutation({
    mutationKey: [ApiAuthKeysEnum.REGISTER],
    mutationFn: createAccount,
    ...options,
  })
}
