import { useCallback, useState } from 'react'
import {
  Button,
  DateInputField,
  Section,
  SelectInputField,
  TextInputField,
} from 'common/components'
import { ISelectOption } from 'common/models'
import { SORT_SELECT_OPTIONS } from 'common/utils'
import { IMagicListFilters } from 'magic/models'
import { DEFAULT_MAGIC_FILTERS, MAGIC_SORT_OPTIONS } from 'magic/utils'

export function MagicFilters() {
  const [filters, setFilters] = useState<IMagicListFilters>(DEFAULT_MAGIC_FILTERS)

  const updateFilters = useCallback(() => {
    console.log('filters', filters)
  }, [filters])

  const clearFilters = useCallback(() => {
    setFilters(DEFAULT_MAGIC_FILTERS)
  }, [])

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
        <SelectInputField
          className={'col-span-full md:col-span-1'}
          handleChange={(value) =>
            setFilters({
              ...filters,
              author: value,
            })
          }
          isControlled={false}
          label={'Autor'}
          name={'author'}
          options={[
            { id: 1, label: 'System', value: 'system' },
            { id: 2, label: 'Nihil', value: 'nihil' },
          ]}
          value={filters.author}
        />
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
        <DateInputField
          className={'col-span-full md:col-span-1'}
          clearable
          handleChange={(value) => setFilters({ ...filters, createdDate: value as Date })}
          isControlled={false}
          label={'Data utworzenia'}
          name={'createdDate'}
          value={filters.createdDate}
        />
        <DateInputField
          className={'col-span-full md:col-span-1'}
          clearable
          handleChange={(value) => setFilters({ ...filters, updatedDate: value as Date })}
          isControlled={false}
          label={'Data edycji'}
          name={'updatedDate'}
          value={filters.updatedDate}
        />
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'}>
        <SelectInputField
          className={'col-span-full md:col-span-1'}
          handleChange={(value) =>
            setFilters({
              ...filters,
              sortBy: value as ISelectOption,
            })
          }
          isControlled={false}
          label={'Sortowanie po'}
          name={'sortBy'}
          options={MAGIC_SORT_OPTIONS}
          value={filters.sortBy}
        />
        <SelectInputField
          className={'col-span-full md:col-span-1'}
          handleChange={(value) =>
            setFilters({
              ...filters,
              sort: value as ISelectOption,
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
