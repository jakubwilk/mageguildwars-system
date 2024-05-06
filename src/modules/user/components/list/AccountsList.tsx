import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'config'
import { UserGroupEnum } from 'user/models'
import { clearAccountsFilters } from 'user/store'

import { AccountsFilters } from './AccountsFilters'
import { ListItem } from './ListItem'
import { Pagination } from './Pagination'

export function AccountsList() {
  const dispatch = useDispatch()
  const { accountsFilters } = useSelector((state) => state.users)

  const data: Array<{
    id: number
    slug: string
    registerDate: Date
    group: UserGroupEnum
    characters: number
    isBlocked: boolean
    isBanned: boolean
  }> = useMemo(() => {
    return [
      {
        id: 1,
        slug: 'mgw-vincent',
        registerDate: new Date(),
        group: UserGroupEnum.ROOT,
        characters: 1,
        isBlocked: false,
        isBanned: false,
      },
      {
        id: 2,
        slug: 'mgw-nihil',
        registerDate: new Date(),
        group: UserGroupEnum.USER,
        characters: 0,
        isBlocked: false,
        isBanned: false,
      },
      {
        id: 3,
        slug: 'mgw-mahiro',
        registerDate: new Date(),
        group: UserGroupEnum.USER,
        characters: 3,
        isBlocked: true,
        isBanned: false,
      },
      {
        id: 4,
        slug: 'mgw-orochi',
        registerDate: new Date(),
        group: UserGroupEnum.OPERATOR,
        characters: 4,
        isBlocked: false,
        isBanned: true,
      },
      {
        id: 5,
        slug: 'mgw-nihil',
        registerDate: new Date(),
        group: UserGroupEnum.USER,
        characters: 0,
        isBlocked: false,
        isBanned: false,
      },
      {
        id: 6,
        slug: 'mgw-mahiro',
        registerDate: new Date(),
        group: UserGroupEnum.USER,
        characters: 3,
        isBlocked: true,
        isBanned: false,
      },
      {
        id: 7,
        slug: 'mgw-orochi',
        registerDate: new Date(),
        group: UserGroupEnum.OPERATOR,
        characters: 4,
        isBlocked: false,
        isBanned: true,
      },
      {
        id: 8,
        slug: 'mgw-nihil',
        registerDate: new Date(),
        group: UserGroupEnum.USER,
        characters: 0,
        isBlocked: false,
        isBanned: false,
      },
      {
        id: 9,
        slug: 'mgw-mahiro',
        registerDate: new Date(),
        group: UserGroupEnum.USER,
        characters: 3,
        isBlocked: true,
        isBanned: false,
      },
      {
        id: 10,
        slug: 'mgw-orochi',
        registerDate: new Date(),
        group: UserGroupEnum.OPERATOR,
        characters: 4,
        isBlocked: false,
        isBanned: true,
      },
      {
        id: 11,
        slug: 'mgw-mahiro',
        registerDate: new Date(),
        group: UserGroupEnum.USER,
        characters: 3,
        isBlocked: true,
        isBanned: false,
      },
      {
        id: 12,
        slug: 'mgw-orochi',
        registerDate: new Date(),
        group: UserGroupEnum.OPERATOR,
        characters: 4,
        isBlocked: false,
        isBanned: true,
      },
    ]
  }, [])

  const totalPages = useMemo(() => {
    if (data.length <= accountsFilters.size) {
      return 1
    }

    return data.length % accountsFilters.size
  }, [data, accountsFilters.size])

  useEffect(() => {
    dispatch(clearAccountsFilters())
  }, [dispatch])

  return (
    <div>
      <AccountsFilters />
      <Pagination currentPage={accountsFilters.page} isInHeader total={totalPages} />
      <section className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
        {data.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </section>
      <Pagination currentPage={accountsFilters.page} total={totalPages} />
    </div>
  )
}
