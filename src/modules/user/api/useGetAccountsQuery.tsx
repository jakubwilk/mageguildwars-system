import { useQuery } from '@tanstack/react-query'
import { TQueryOptions } from 'common/models'
import {
  ApiKeysEnum,
  IAccountsListFilters,
  IUsersListItem,
  UserGroupEnum,
} from 'user/models'

const getAccounts = async (params: IAccountsListFilters) => {
  console.log('useGetAccountsQuery::params', params)
  const data: IUsersListItem[] = await [
    {
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
      isBlocked: false,
      isBanned: false,
      limit: 3,
    },
    {
      id: 2,
      slug: 'mgw-nihil',
      email: 'nihil@mageguildwars.pl',
      registerDate: new Date(),
      group: {
        id: 1,
        label: 'Użytkownik',
        value: UserGroupEnum.USER,
      },
      characters: 0,
      isBlocked: false,
      isBanned: false,
      limit: 3,
    },
    {
      id: 3,
      slug: 'mgw-mahiro',
      email: 'mahiro@mageguildwars.pl',
      registerDate: new Date(),
      group: {
        id: 1,
        label: 'Użytkownik',
        value: UserGroupEnum.USER,
      },
      characters: 3,
      isBlocked: true,
      isBanned: false,
      limit: 3,
    },
    {
      id: 4,
      slug: 'mgw-orochi',
      email: 'orochi@mageguildwars.pl',
      registerDate: new Date(),
      group: {
        id: 1,
        label: 'Operator',
        value: UserGroupEnum.OPERATOR,
      },
      characters: 4,
      isBlocked: false,
      isBanned: true,
      limit: 3,
    },
    {
      id: 5,
      slug: 'mgw-nihil',
      email: '',
      registerDate: new Date(),
      group: {
        id: 1,
        label: 'Użytkownik',
        value: UserGroupEnum.USER,
      },
      characters: 0,
      isBlocked: false,
      isBanned: false,
      limit: 3,
    },
  ]

  return data
}

export function useGetAccountsQuery(
  params: IAccountsListFilters,
  options: TQueryOptions<IUsersListItem[]> = {},
) {
  return useQuery({
    queryKey: [ApiKeysEnum.GET_ACCOUNTS],
    queryFn: () => getAccounts(params),
    ...options,
  })
}
