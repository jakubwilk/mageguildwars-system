import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { loadEnvVariable } from '../../modules/common/utils'

export type TQueryOptions<T> =
  | Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
  | Omit<UndefinedInitialDataOptions<T>, 'queryKey' | 'queryFn'>
  | Omit<DefinedInitialDataOptions<T>, 'queryKey' | 'queryFn'>

export type TMutationOptions<T> = Omit<
  UseMutationOptions<unknown, Error, T>,
  'mutationKey' | 'mutationFn'
>

const instance: AxiosInstance = axios.create({
  baseURL: loadEnvVariable('VITE_API_URL'),
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export class ApiManager {
  public static async getRequest<T extends object>(
    url: string,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    return await instance.get<T>(url, options)
  }

  public static async postRequest<T extends object, D extends object>(
    url: string,
    body: D,
    options: AxiosRequestConfig = {},
  ): Promise<AxiosResponse<T>> {
    return await instance.post<T>(url, body, options)
  }
}
