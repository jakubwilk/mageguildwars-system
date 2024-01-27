import { UndefinedInitialDataOptions } from '@tanstack/react-query'

export type TQueryOptions = Omit<
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  UndefinedInitialDataOptions<any, Error, any, string[]>,
  'queryKey' | 'queryFn'
>
