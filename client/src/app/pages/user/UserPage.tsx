import { useEffect } from 'react'
import { useAppLayoutContext } from '@common'

function UserPage() {
  const { setIsHomePage } = useAppLayoutContext()

  useEffect(() => {
    setIsHomePage(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <p>{'User page'}</p>
}

export default UserPage
