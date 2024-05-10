import { useMutation } from '@tanstack/react-query'
import { TMutationOptions } from 'common/models'
import { ApiKeysEnum } from 'user/models'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unbanAccount = async (slug: string) => {
  const data: boolean = await true

  return data
}

export function useUnbanAccountMutation(options: TMutationOptions<string> = {}) {
  return useMutation({
    mutationKey: [ApiKeysEnum.UNBAN_ACCOUNT],
    mutationFn: (slug: string) => unbanAccount(slug),
    ...options,
  })
}
