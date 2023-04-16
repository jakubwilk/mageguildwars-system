import { Link } from 'react-router-dom'
import { Burger, createStyles, Header, useMantineTheme } from '@mantine/core'
import { clsx } from 'clsx'

import { Logo } from '../logo'

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.colors.night[6],
    borderColor: 'transparent',
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
            <Logo />
          </Link>

          <Burger opened={isOpen} onClick={handleOpen} size={'sm'} color={theme.colors.gray[1]} />
        </div>
      </div>
    </Header>
  )
}

export default AppHeader
