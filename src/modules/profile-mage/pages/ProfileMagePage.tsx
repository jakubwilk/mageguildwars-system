import { useEffect, useState } from 'react'
import { important } from '@common'
import { Button, createStyles } from '@mantine/core'
import { IMage } from '@profile-mage'
import { IconUserPlus } from '@tabler/icons'
import { useUserContext } from '@user'

const useStyles = createStyles(() => ({
  grid: {
    display: 'flex',
    alignItems: 'center',
  },
  createButton: {
    display: 'flex',
    minHeight: '100%',
    height: important('100%'),
  },
}))

function ProfileMagePage() {
  const { user } = useUserContext()
  const { classes } = useStyles()
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
          <div className={classes.grid}>
            {mages.map((mage) => (
              <div key={mage.id}>
                <img src={mage.avatarUrl} alt={mage.username} />
              </div>
            ))}
            <Button className={classes.createButton} radius={0} leftIcon={<IconUserPlus />}>
              {'Dodaj nową postać'}
            </Button>
          </div>
        </section>
      )}
    </main>
  )
}

export default ProfileMagePage
