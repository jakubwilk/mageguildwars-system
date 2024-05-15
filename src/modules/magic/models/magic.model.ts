import { ISelectOption } from 'common/models'

export enum MagicTabEnum {
  SYSTEM = 'SYSTEM',
  USERS = 'USERS',
}

export interface IMagicListItem {
  slug: string
  name: string
  imageUrl: string
  deescription: string
  createdAt: string
  updatedAt: string
}

export interface IMagicListFilters {
  slug?: string
  createdDate?: Date
  updatedDate?: Date
  author?: ISelectOption
  page: number
  size: number
  sort: ISelectOption
  sortBy: ISelectOption
}

export interface IMagicListRequest {
  slug?: string
  createdAt?: Date
  updatedAt?: Date
  author?: string
  page: number
  size: number
  sort: string
  sortBy: string
}

export interface IMagicListResponse {
  data: IMagicListItem[]
  total: number
}
