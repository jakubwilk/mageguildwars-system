import { useEffect, useState } from 'react'
import { IMage } from '@profile-mage'
import { useUserContext } from '@user'

function ProfileMagePage() {
  const { user } = useUserContext()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [mages, setMages] = useState<IMage[]>([])

  useEffect(() => {
    setIsLoading(true)
    fetch('/api/mage')
      .then((res) => res.json())
      .then((res) => {
        setMages(res)
        setIsLoading(false)
      })
  }, [setMages])

  if (!user) {
    return <p>{'Podany użytkownik nie istnieje'}</p>
  }

  return (
    <main>
      <h2>
        {'Profil użytkownika: '}
        {user.username}
      </h2>
      {isLoading ? (
        <p>{'Ładowanie'}</p>
      ) : (
        <section>
          {mages.map((mage) => (
            <div key={mage.id}>{mage.username}</div>
          ))}
        </section>
      )}
    </main>
  )
}

export default ProfileMagePage
