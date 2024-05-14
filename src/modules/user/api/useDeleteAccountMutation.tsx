import { useMutation } from '@tanstack/react-query'
import { TMutationOptions } from 'common/models'
import { ApiKeysEnum } from 'user/models'

const deleteAccount = async (slug: string) => {
  console.log('useDeleteAccountMutation::slug', slug)
  const data: boolean = await true

  return data
}

export function useDeleteAccountMutation(options: TMutationOptions<string> = {}) {
  return useMutation({
    mutationKey: [ApiKeysEnum.DELETE_ACCOUNT],
    mutationFn: (slug: string) => deleteAccount(slug),
    ...options,
  })
}
