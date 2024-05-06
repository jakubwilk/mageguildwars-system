import { useState } from 'react'
import { Select, Switch, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useDebouncedValue } from '@mantine/hooks'
import { Section } from 'common/components'
import { IAccountsListRequest, UserGroupEnum } from 'user/models'
import {
  DEFAULT_USERS_FILTERS,
  USER_GROUP_OPTIONS,
  userGroupId,
  userGroupName,
} from 'user/utils'

export function AccountsFilters() {
  const [filters, setFilters] = useState<IAccountsListRequest>(DEFAULT_USERS_FILTERS)
  const [debouncedFilters] = useDebouncedValue(filters, 500)

  console.log('filters', filters)
  console.log('debouncedFilters', debouncedFilters)

  return (
    <Section
      className={
        'grid grid-cols-1 grid-rows-9 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 gap-4 mb-4 h-auto'
      }
    >
      <TextInput
        label={'Slug'}
        onChange={(event) => setFilters({ ...filters, slug: event.currentTarget.value })}
        value={filters.slug}
      />
      <DateInput
        clearable
        label={'Data rejestracji'}
        onChange={(value) => setFilters({ ...filters, registerDate: value })}
        value={filters.registerDate}
      />
      <Select
        clearable
        data={USER_GROUP_OPTIONS}
        label={'Grupa'}
        onChange={(value) =>
          setFilters({
            ...filters,
            group: userGroupId.get(value as string),
          })
        }
        value={userGroupName.get(filters.group as UserGroupEnum)}
      />
      <Switch
        checked={filters.isBlocked}
        className={'row-start-2 row-span-2'}
        label={'Czy konto jest aktywne?'}
        onChange={(event) =>
          setFilters({ ...filters, isBlocked: event.currentTarget.checked })
        }
      />
      <Switch
        checked={filters.isBanned}
        className={'row-start-2 row-span-2'}
        label={'Czy konto jest zbanowane?'}
        onChange={(event) =>
          setFilters({ ...filters, isBanned: event.currentTarget.checked })
        }
      />
    </Section>
  )
}
