import { Link } from 'react-router-dom'
import { Burger, createStyles, Header, useMantineTheme } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.brand,
    borderColor: theme.colors.night[5],
  },
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
  handleOpen: () => void
}

function AppHeader({ isOpen, handleOpen }: IProps) {
  const theme = useMantineTheme()
  const { classes } = useStyles()

  return (
    <Header height={{ base: 70, md: 110 }} className={clsx('px-4', classes.header)}>
      <div className={'container mx-auto h-full'}>
        <div className={'flex items-center justify-between h-full'}>
          <Link to={'/'}>
            <img src={'https://mageguildwars.pl/images/revolution/logo.png'} alt={'Mage Guild Wars'} className={classes.logo} />
          </Link>

          <Burger opened={isOpen} onClick={handleOpen} size={'sm'} color={theme.colors.gray[1]} />
        </div>
      </div>
    </Header>
  )
}

export default AppHeader
