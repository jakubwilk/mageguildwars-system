import { useCallback, useState } from 'react'
import {
  Button,
  DateInputField,
  Section,
  SelectInputField,
  TextInputField,
} from 'common/components'
import { ISelectOption } from 'common/models'
import { BOOLEAN_SELECT_OPTIONS, SORT_SELECT_OPTIONS } from 'common/utils'
import { useDispatch } from 'config'
import { IAccountsListRequest } from 'user/models'
import { clearAccountsFilters, setAccountsFilters } from 'user/store'
import {
  ACCOUNT_SORT_OPTIONS,
  DEFAULT_USERS_FILTERS,
  USER_GROUP_OPTIONS,
} from 'user/utils'

export function AccountsFilters() {
  const dispatch = useDispatch()
  const [filters, setFilters] = useState<IAccountsListRequest>(DEFAULT_USERS_FILTERS)

  const updateFilters = useCallback(
    () => dispatch(setAccountsFilters(filters)),
    [dispatch, filters],
  )

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_USERS_FILTERS)
    dispatch(clearAccountsFilters())
  }, [dispatch])

  return (
    <Section className={'flex flex-col gap-4 mb-4'}>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
        <TextInputField
          className={'col-span-full lg:col-span-1'}
          handleChange={(value) => setFilters({ ...filters, slug: value })}
          isControlled={false}
          label={'Nazwa powiązana'}
          name={'slug'}
          value={filters.slug}
        />
        <DateInputField
          className={'col-span-full md:col-span-1'}
          clearable
          handleChange={(value) =>
            setFilters({ ...filters, registerDate: value as Date })
          }
          isControlled={false}
          label={'Data rejestracji'}
          name={'registerDate'}
          value={filters.registerDate}
        />
        <SelectInputField
          className={'col-span-full md:col-span-1'}
          handleChange={(option) =>
            setFilters({
              ...filters,
              group: (option as ISelectOption).value as number,
            })
          }
          isControlled={false}
          label={'Grupa'}
          name={'group'}
          options={USER_GROUP_OPTIONS}
          value={filters.group}
        />
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
        <SelectInputField
          className={'col-span-full md:col-span-1'}
          handleChange={(value) =>
            setFilters({
              ...filters,
              isBlocked: value as boolean,
            })
          }
          isControlled={false}
          label={'Czy konto wymaga aktywacji?'}
          name={'isBlocked'}
          options={BOOLEAN_SELECT_OPTIONS}
          value={filters.isBlocked}
        />
        <SelectInputField
          className={'col-span-full md:col-span-1'}
          handleChange={(value) =>
            setFilters({
              ...filters,
              isBanned: value as boolean,
            })
          }
          isControlled={false}
          label={'Czy konto jest zbanowane?'}
          name={'isBanned'}
          options={BOOLEAN_SELECT_OPTIONS}
          value={filters.isBanned}
        />
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
        <SelectInputField
          className={'col-span-full md:col-span-1'}
          handleChange={(value) =>
            setFilters({
              ...filters,
              sortBy: value as string,
            })
          }
          isControlled={false}
          label={'Sortowanie po'}
          name={'sortBy'}
          options={ACCOUNT_SORT_OPTIONS}
          value={filters.sortBy}
        />
        <SelectInputField
          className={'col-span-full md:col-span-1'}
          handleChange={(value) =>
            setFilters({
              ...filters,
              sort: value as string,
            })
          }
          isControlled={false}
          label={'Sortowanie w kolejności'}
          name={'sort'}
          options={SORT_SELECT_OPTIONS}
          value={filters.sort}
        />
      </div>
      <div className={'flex items-center justify-end gap-4'}>
        <Button onClick={updateFilters} type={'button'}>
          {'Wyszukaj'}
        </Button>
        <Button
          className={'font-normal'}
          onClick={clearFilters}
          type={'button'}
          variant={'default'}
        >
          {'Wyczyść filtry'}
        </Button>
      </div>
    </Section>
  )
}
