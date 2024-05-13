import { useQuery } from '@tanstack/react-query'
import { TQueryOptions } from 'common/models'
import { ApiKeysEnum, IUsersListItem, UserGroupEnum } from 'user/models'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAccount = async (slug: string) => {
  const data: IUsersListItem = await {
    id: 1,
    slug: 'mgw-vincent',
    email: 'vini@mageguildwars.pl',
    registerDate: new Date(),
    group: {
      id: 1,
      label: 'Administrator',
      value: UserGroupEnum.ROOT,
    },
    characters: 1,
    limit: 3,
    isBlocked: false,
    isBanned: false,
  }

  return data
}

export function useGetAccountQuery(
  slug: string,
  options: TQueryOptions<IUsersListItem> = {},
) {
  return useQuery({
    queryKey: [ApiKeysEnum.GET_ACCOUNT],
    queryFn: () => getAccount(slug),
    ...options,
  })
}
