import { IMagicListItem } from './magic.model'

export enum ApiKeysEnum {
  GET_MAGIC = 'GET_MAGIC',
  ADD_MAGIC = 'ADD_MAGIC',
  EDIT_MAGIC = 'EDIT_MAGIC',
  DELETE_MAGIC = 'DELETE_MAGIC',
  APPROVE_MAGIC = 'APPROVE_MAGIC',
  CANCEL_MAGIC = 'CANCEL_MAGIC',
}

export interface IMagicListRequest {
  slug?: string
  category?: string
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
