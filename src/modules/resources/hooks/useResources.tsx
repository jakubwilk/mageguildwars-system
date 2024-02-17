import { useCallback } from 'react'

import { getResources } from '../config'
import { TResourcePrefix, TResourceSuffix } from '../models'

export const useResources = (prefix: TResourcePrefix) => {
  const getResource = useCallback(
    (key: TResourceSuffix): string => {
      const resources = getResources()
      const prefixedResource = resources[prefix]

      if (prefixedResource) {
        return prefixedResource[key]
      }

      return '_'
    },
    [prefix],
  )

  return { getResource }
}
