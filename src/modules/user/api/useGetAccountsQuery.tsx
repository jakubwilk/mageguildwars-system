import { useQuery } from '@tanstack/react-query'
import { TQueryOptions } from 'common/models'
import {
  ApiKeysEnum,
  IAccountsListRequest,
  IUsersListItem,
  UserGroupEnum,
} from 'user/models'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAccounts = async (params: IAccountsListRequest) => {
  const data: IUsersListItem[] = await [
    {
      id: 1,
      slug: 'mgw-vincent',
      registerDate: new Date(),
      group: UserGroupEnum.ROOT,
      characters: 1,
      isBlocked: false,
      isBanned: false,
      limit: 3,
    },
    {
      id: 2,
      slug: 'mgw-nihil',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 0,
      isBlocked: false,
      isBanned: false,
      limit: 3,
    },
    {
      id: 3,
      slug: 'mgw-mahiro',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 3,
      isBlocked: true,
      isBanned: false,
      limit: 3,
    },
    {
      id: 4,
      slug: 'mgw-orochi',
      registerDate: new Date(),
      group: UserGroupEnum.OPERATOR,
      characters: 4,
      isBlocked: false,
      isBanned: true,
      limit: 3,
    },
    {
      id: 5,
      slug: 'mgw-nihil',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 0,
      isBlocked: false,
      isBanned: false,
      limit: 3,
    },
    {
      id: 6,
      slug: 'mgw-mahiro',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 3,
      isBlocked: true,
      isBanned: false,
      limit: 3,
    },
    {
      id: 7,
      slug: 'mgw-orochi',
      registerDate: new Date(),
      group: UserGroupEnum.OPERATOR,
      characters: 4,
      isBlocked: false,
      isBanned: true,
      limit: 3,
    },
    {
      id: 8,
      slug: 'mgw-nihil',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 0,
      isBlocked: false,
      isBanned: false,
      limit: 3,
    },
    {
      id: 9,
      slug: 'mgw-mahiro',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 3,
      isBlocked: true,
      isBanned: false,
      limit: 3,
    },
    {
      id: 10,
      slug: 'mgw-orochi',
      registerDate: new Date(),
      group: UserGroupEnum.OPERATOR,
      characters: 4,
      isBlocked: false,
      isBanned: true,
      limit: 3,
    },
    {
      id: 11,
      slug: 'mgw-mahiro',
      registerDate: new Date(),
      group: UserGroupEnum.USER,
      characters: 3,
      isBlocked: true,
      isBanned: false,
      limit: 3,
    },
    {
      id: 12,
      slug: 'mgw-orochi',
      registerDate: new Date(),
      group: UserGroupEnum.OPERATOR,
      characters: 4,
      isBlocked: false,
      isBanned: true,
      limit: 3,
    },
  ]

  return data
}

export function useGetAccountsQuery(
  params: IAccountsListRequest,
  options: TQueryOptions<IUsersListItem[]> = {},
) {
  return useQuery({
    queryKey: [ApiKeysEnum.GET_ACCOUNTS],
    queryFn: () => getAccounts(params),
    ...options,
  })
}
