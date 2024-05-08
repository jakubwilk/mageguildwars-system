import { useState } from 'react'
import { DateInput } from '@mantine/dates'
import { Button, Section, SelectInputField, TextInputField } from 'common/components'
import { BOOLEAN_SELECT_OPTIONS, SORT_SELECT_OPTIONS } from 'common/utils'
import { IAccountsListRequest } from 'user/models'
import {
  ACCOUNT_SORT_OPTIONS,
  DEFAULT_USERS_FILTERS,
  USER_GROUP_OPTIONS,
} from 'user/utils'

export function AccountsFilters() {
  const [filters, setFilters] = useState<IAccountsListRequest>(DEFAULT_USERS_FILTERS)

  return (
    <Section className={'flex flex-col gap-4 mb-4'}>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
        <TextInputField
          className={'col-span-full lg:col-span-1'}
          label={'Nazwa powiązana'}
          name={'slug'}
          onChange={(event) =>
            setFilters({ ...filters, slug: event.currentTarget.value })
          }
          value={filters.slug}
        />
        <DateInput
          className={'col-span-full md:col-span-1'}
          clearable
          label={'Data rejestracji'}
          onChange={(value) => setFilters({ ...filters, registerDate: value as Date })}
          value={filters.registerDate}
        />
        <SelectInputField
          className={'col-span-full md:col-span-1'}
          handleChange={(value) =>
            setFilters({
              ...filters,
              group: value as number,
            })
          }
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
          label={'Sortowanie w kolejności'}
          name={'sort'}
          options={SORT_SELECT_OPTIONS}
          value={filters.sort}
        />
      </div>
      <div className={'flex items-center justify-end gap-4'}>
        <Button onClick={() => console.log('filters', filters)} type={'button'}>
          {'Wyszukaj'}
        </Button>
        <Button
          className={'font-normal'}
          onClick={() => setFilters(DEFAULT_USERS_FILTERS)}
          type={'button'}
          variant={'default'}
        >
          {'Wyczyść filtry'}
        </Button>
      </div>
    </Section>
  )
}
