import { useEffect } from 'react'
import { useAppLayoutContext } from '@common'

function ForumPage() {
  const { setIsHomePage } = useAppLayoutContext()

  useEffect(() => {
    setIsHomePage(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <p>{'Forum Page 123'}</p>
    </div>
  )
}

export default ForumPage
