import { useMutation } from '@tanstack/react-query'
import { TMutationOptions } from 'common/models'
import { ApiKeysEnum } from 'user/models'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const activateAccount = async (slug: string) => {
  const data: boolean = await true

  return data
}

export function useActivateAccountMutation(options: TMutationOptions<string> = {}) {
  return useMutation({
    mutationKey: [ApiKeysEnum.ACTIVATE_ACCOUNT],
    mutationFn: (slug: string) => activateAccount(slug),
    ...options,
  })
}
