import { ISelectOption } from 'common/models'
import { IMagicListFilters } from 'magic/models'

export const DEFAULT_MAGIC_FILTERS: IMagicListFilters = {
  page: 1,
  size: 10,
  sort: {
    id: 1,
    label: 'Rosnąco',
    value: 'asc',
  },
  sortBy: {
    id: 1,
    label: 'Data utworzenia',
    value: 'createdDate',
  },
}

export const MAGIC_SORT_OPTIONS: ISelectOption[] = [
  { id: 1, label: 'Nazwa powiązana', value: 'slug' },
  { id: 2, label: 'Data utworzenia', value: 'createdDate' },
  { id: 3, label: 'Data aktualizacji', value: 'updatedDate' },
  { id: 4, label: 'Autor', value: 'author' },
]
