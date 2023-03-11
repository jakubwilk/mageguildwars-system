import { useEffect, useState } from 'react'
import { important } from '@common'
import { Button, createStyles, Text } from '@mantine/core'
import { IMage } from '@profile-mage'
import { IconUserPlus } from '@tabler/icons'
import { useUserContext } from '@user'
import clsx from 'clsx'

const useStyles = createStyles((theme) => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 185px)',
    columnGap: '1rem',
  },
  createButton: {
    backgroundColor: important(theme.colors.dark[0]),
    color: important(theme.colors.dark[3]),
    minHeight: '100%',
    height: important('100%'),
    '&:hover, &:focus': {
      backgroundColor: important(theme.colors['brand-color'][9]),
      color: important(theme.white),
      outline: 'none',
    },
    '& .mantine-Button-label': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: important('100%'),
      '& > svg': {
        width: '40px',
        height: 'auto',
        marginBottom: '1rem',
      },
    },
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={mage.avatarUrl} alt={mage.username} />
              </div>
            ))}
            <Button className={clsx(classes.createButton, 'duration-100 ease-linear')} radius={0}>
              <IconUserPlus />
              <Text>{'Dodaj nową postać'}</Text>
            </Button>
          </div>
        </section>
      )}
    </main>
  )
}

export default ProfileMagePage
