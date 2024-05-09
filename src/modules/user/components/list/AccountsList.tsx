import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'config'
import { useGetAccountsQuery } from 'user/api'
import { clearAccountsFilters } from 'user/store'

import { AccountsFilters } from './AccountsFilters'
import { ListItem } from './ListItem'
import { Pagination } from './Pagination'

export function AccountsList() {
  const dispatch = useDispatch()
  const { accountsFilters } = useSelector((state) => state.users)
  const { data, isFetching } = useGetAccountsQuery(accountsFilters)

  const totalPages = useMemo(() => {
    if (data && data.length <= accountsFilters.size) {
      return 1
    }

    return data ? data.length % accountsFilters.size : 0
  }, [data, accountsFilters.size])

  useEffect(() => {
    dispatch(clearAccountsFilters())
  }, [dispatch])

  return (
    <div>
      <AccountsFilters />
      {data && !isFetching ? (
        <>
          <Pagination currentPage={accountsFilters.page} isInHeader total={totalPages} />
          <section className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
            {data.map((item) => (
              <ListItem item={item} key={item.id} />
            ))}
          </section>
        </>
      ) : (
        <p>{'Loading...'}</p>
      )}
      <Pagination currentPage={accountsFilters.page} total={totalPages} />
    </div>
  )
}
