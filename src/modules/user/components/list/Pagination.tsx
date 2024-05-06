import { useCallback } from 'react'
import { Pagination as MantinePagination } from '@mantine/core'
import clsx from 'clsx'
import { useDispatch } from 'config'
import { setAccountsFilters } from 'user/store'

interface IProps {
  total: number
  currentPage: number
  isInHeader?: boolean
}

export function Pagination({ total, currentPage, isInHeader = false }: IProps) {
  const dispatch = useDispatch()
  const setPage = useCallback(
    (page: number) => {
      dispatch(setAccountsFilters({ page: page }))
    },
    [dispatch],
  )

  return (
    <div className={clsx('w-full flex justify-end', isInHeader ? 'mb-4' : 'mt-4')}>
      <MantinePagination onChange={setPage} total={total} value={currentPage} />
    </div>
  )
}
