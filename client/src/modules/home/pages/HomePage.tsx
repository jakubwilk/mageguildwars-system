import { useAuthContext } from '@auth'

function HomePage() {
  const { user } = useAuthContext()

  console.log('user', user)

  return <p>{'Home Page'}</p>
}

export default HomePage
