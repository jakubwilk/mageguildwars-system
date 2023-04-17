import { useEffect, useState } from 'react'

import { FEATURE_PANELS_MOCK } from '../mock'
import { SingleFeaturePanel } from '../models'

function useFeaturePanels() {
  const [data, setData] = useState<Array<SingleFeaturePanel>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetch = setTimeout(() => {
      setData(FEATURE_PANELS_MOCK)
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(fetch)
  }, [])

  return { isLoading, data }
}

export default useFeaturePanels
