import { useMutation } from '@tanstack/react-query'
import { TMutationOptions } from 'common/models'
import { ApiKeysEnum } from 'user/models'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const banAccount = async (slug: string) => {
  const data: boolean = await true

  return data
}

export function useBanAccountMutation(options: TMutationOptions<string> = {}) {
  return useMutation({
    mutationKey: [ApiKeysEnum.BAN_ACCOUNT],
    mutationFn: (slug: string) => banAccount(slug),
    ...options,
  })
}
