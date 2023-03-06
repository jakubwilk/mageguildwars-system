import Link from 'next/link'
import { important, IUser, SITE_NAVIGATION } from '@common'
import { ActionIcon, clsx, createStyles, Divider, MediaQuery, Navbar, ScrollArea, Text } from '@mantine/core'
import { UserMobileNavigation } from '@user'
import { Bookmarks, Books, Home, Planet, Users } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    '&:hover, &:focus': {
      backgroundColor: 'rgba(48, 30, 56, 0.1)',
      transition: 'all .1s ease-in-out',
      '& > button': {
        transition: 'all .1s ease-in-out',
        backgroundColor: important('transparent'),
      },
    },
  },
  icon: {
    backgroundColor: important('rgba(48, 30, 56, 0.1)'),
    color: theme.colors['brand-color'][9],
  },
  text: {
    fontSize: '0.9rem',
  },
}))

interface IProps {
  isHidden: boolean
  isLoading: boolean
}

function Navigation({ isHidden, isLoading }: IProps) {
  const { classes } = useStyles()

  return (
    <Navbar hiddenBreakpoint={'md'} hidden={isHidden} width={{ md: 300 }}>
      <Navbar.Section component={ScrollArea} className={'my-4'} grow>
        {SITE_NAVIGATION.map(({ label, href, icon }) => (
          <Link key={label} href={href} className={clsx('mx-4 mb-2 p-2 rounded-md', classes.link)}>
            <ActionIcon variant={'light'} className={classes.icon}>
              {icon}
            </ActionIcon>
            <Text className={clsx('ml-3', classes.text)}>{label}</Text>
          </Link>
        ))}
      </Navbar.Section>
      <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
        <Divider my={'sm'} />
      </MediaQuery>
      <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
        <Navbar.Section>
          <UserMobileNavigation isLoading={isLoading} />
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  )
}

export default Navigation
