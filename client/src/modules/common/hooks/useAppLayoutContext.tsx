import { useContext } from 'react'
import { AppLayoutContext } from '@common'

function useAppLayoutContext() {
  const { isHomePage, setIsHomePage } = useContext(AppLayoutContext)

  return { isHomePage, setIsHomePage }
}

export default useAppLayoutContext
