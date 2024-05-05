import { useCallback } from 'react'
import { Pagination as MantinePagination } from '@mantine/core'
import { useDispatch } from 'config'
import { setFilters } from 'user/store'

interface IProps {
  total: number
  currentPage: number
}

export function Pagination({ total, currentPage }: IProps) {
  const dispatch = useDispatch()
  const setPage = useCallback(
    (page: number) => {
      dispatch(setFilters({ page: page }))
    },
    [dispatch],
  )

  return (
    <div className={'w-full flex justify-end mt-8'}>
      <MantinePagination onChange={setPage} total={total} value={currentPage} />
    </div>
  )
}
