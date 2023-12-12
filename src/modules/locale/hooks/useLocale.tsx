import { useCallback } from 'react'
import { getNamespace, TNamespace } from '@modules/locale'
import { get } from 'lodash'

const useLocale = (namespace: TNamespace = 'common') => {
  const translateByHook = useCallback(
    (localeKey: string) => {
      const translations = getNamespace(namespace)

      return <>{get(translations, localeKey)}</>
    },
    [namespace],
  )

  return { translateByHook }
}

export default useLocale
