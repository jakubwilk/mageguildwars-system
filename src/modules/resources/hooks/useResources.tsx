import { useCallback } from 'react'

import { getResources } from '../config'
import { TResources } from '../models'

export const useResources = <T extends keyof TResources>(prefix: T) => {
  const getResource = useCallback(
    (key: keyof TResources[T]): string => {
      const singleResource = getResources()[prefix]
      if (singleResource && Object.keys(singleResource).includes(key as string)) {
        return singleResource[key as keyof typeof singleResource] as string
      }

      return '_'
    },
    [prefix],
  )

  return { getResource }
}
