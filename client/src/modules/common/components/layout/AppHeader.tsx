import { Link } from 'react-router-dom'
import { Burger, createStyles, Header, MediaQuery, useMantineTheme } from '@mantine/core'

const useStyles = createStyles(() => ({
  logo: {
    width: 'auto',
    height: 50,
    [`@media screen and (min-width: 720px)`]: {
      width: 'auto',
      height: 60,
    },
    [`@media screen and (min-width: 960px)`]: {
      width: 320,
      height: 70,
    },
  },
}))

interface IProps {
  isOpen: boolean
  setOpened: (v: boolean) => void
}

function AppHeader({ isOpen, setOpened }: IProps) {
  const theme = useMantineTheme()
  const { classes } = useStyles()

  return (
    <Header height={{ base: 70, md: 110 }} className={'px-4'}>
      <div className={'flex items-center justify-between h-full'}>
        <Link to={'/'}>
          <img src={'https://mageguildwars.pl/images/revolution/logo.png'} alt={'Mage Guild Wars'} className={classes.logo} />
        </Link>

        <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
          <Burger opened={isOpen} onClick={() => setOpened(!isOpen)} size={'sm'} color={theme.colors.gray[6]} />
        </MediaQuery>
      </div>
    </Header>
  )
}

export default AppHeader
