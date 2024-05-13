import { useMutation } from '@tanstack/react-query'
import { TMutationOptions } from 'common/models'
import { ApiKeysEnum } from 'user/models'

const banAccount = async (slug: string) => {
  console.log('useBanAccountMutation::slug', slug)
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
