import Link from 'next/link'
import { important } from '@common'
import { ActionIcon, createStyles, MediaQuery, Navbar, ScrollArea, Text } from '@mantine/core'
import { UserMobileNavigation } from '@user'
import { Bookmarks, Books, Home, Planet, Users } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'block',
    '&:hover, &:focus': {
      backgroundColor: 'rgba(48, 30, 56, 0.1)',
      '& > button': {
        backgroundColor: important('transparent'),
      },
    },
  },
  icon: {
    backgroundColor: important('rgba(48, 30, 56, 0.1)'),
    color: theme.colors['brand-color'][9],
  },
}))

interface IProps {
  isHidden: boolean
}

function Navigation({ isHidden }: IProps) {
  const { classes } = useStyles()

  return (
    <Navbar hiddenBreakpoint={'md'} hidden={isHidden} width={{ md: 300 }}>
      <Navbar.Section component={ScrollArea} grow>
        <Link href={'/'} className={classes.link}>
          <ActionIcon variant={'light'} className={classes.icon}>
            <Home size={20} strokeWidth={1.5} />
          </ActionIcon>
          <Text>{'Strona główna'}</Text>
        </Link>
        <Link href={'/users'} className={classes.link}>
          <ActionIcon variant={'light'} className={classes.icon}>
            <Users size={20} strokeWidth={1.5} />
          </ActionIcon>
          <Text>{'Lista magów'}</Text>
        </Link>
        <Link href={'/database'} className={classes.link}>
          <ActionIcon variant={'light'} className={classes.icon}>
            <Bookmarks size={20} strokeWidth={1.5} />
          </ActionIcon>
          <Text>{'Spis zdolności'}</Text>
        </Link>
        <Link href={'/world-database'} className={classes.link}>
          <ActionIcon variant={'light'} className={classes.icon}>
            <Books size={20} strokeWidth={1.5} />
          </ActionIcon>
          <Text>{'Encyklopedia'}</Text>
        </Link>
        <Link href={'/world-map'} className={classes.link}>
          <ActionIcon variant={'light'} className={classes.icon}>
            <Planet size={20} strokeWidth={1.5} />
          </ActionIcon>
          <Text>{'Mapa świata'}</Text>
        </Link>
      </Navbar.Section>
      <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
        <Navbar.Section>
          <UserMobileNavigation />
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  )
}

export default Navigation
