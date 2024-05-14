import {
  DefinedInitialDataOptions,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query'

export type TQueryOptions<T> =
  | Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
  | Omit<UndefinedInitialDataOptions<T>, 'queryKey' | 'queryFn'>
  | Omit<DefinedInitialDataOptions<T>, 'queryKey' | 'queryFn'>

export type TMutationOptions<T> = Omit<
  UseMutationOptions<unknown, Error, T>,
  'mutationKey' | 'mutationFn'
>
