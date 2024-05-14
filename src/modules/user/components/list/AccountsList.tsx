import { useCallback, useEffect, useMemo, useState } from 'react'
import { IconUserPlus } from '@tabler/icons-react'
import { Button } from 'common/components'
import { useDispatch, useSelector } from 'config'
import { useGetAccountsQuery } from 'user/api'
import { clearAccountsFilters } from 'user/store'

import { EditAccountModal } from '../modal'

import { AccountsFilters } from './AccountsFilters'
import { ListItem } from './ListItem'
import { Pagination } from './Pagination'

export function AccountsList() {
  const dispatch = useDispatch()
  const { accountsFilters } = useSelector((state) => state.users)

  const { data, isFetching } = useGetAccountsQuery(accountsFilters)
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false)

  const totalPages = useMemo(() => {
    if (data && data.length <= accountsFilters.size) {
      return 1
    }

    return data ? data.length % accountsFilters.size : 0
  }, [data, accountsFilters.size])

  const handleToggleCreateAccountModal = useCallback(
    () => setIsCreateAccountModalOpen(!isCreateAccountModalOpen),
    [isCreateAccountModalOpen],
  )

  useEffect(() => {
    dispatch(clearAccountsFilters())
  }, [dispatch])

  return (
    <div>
      <AccountsFilters />
      {data && !isFetching ? (
        <>
          <div className={'w-full flex items-center justify-between gap-4 mb-4'}>
            <Button
              className={'px-8 py-4 h-[auto]'}
              leftSection={<IconUserPlus size={18} />}
              onClick={handleToggleCreateAccountModal}
              radius={'md'}
              type={'button'}
            >
              {'Dodaj konto'}
            </Button>
            <Pagination
              currentPage={accountsFilters.page}
              isInHeader
              isNextToButton
              total={totalPages}
            />
          </div>
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
      {isCreateAccountModalOpen && (
        <EditAccountModal
          handleClose={handleToggleCreateAccountModal}
          isOpen={isCreateAccountModalOpen}
        />
      )}
    </div>
  )
}
