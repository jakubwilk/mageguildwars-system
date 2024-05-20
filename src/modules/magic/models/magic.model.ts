import { ISelectOption } from 'common/models'

export enum MagicTabEnum {
  SYSTEM = 'SYSTEM',
  USERS = 'USERS',
}

export interface IMagicListItem {
  slug: string
  name: string
  category: string
  imageUrl: string
  deescription: string
  createdAt: string
  updatedAt: string
}

export interface IMagicListFilters {
  slug?: string
  category?: string
  createdDate?: Date
  updatedDate?: Date
  author?: ISelectOption
  page: number
  size: number
  sort: ISelectOption
  sortBy: ISelectOption
}
