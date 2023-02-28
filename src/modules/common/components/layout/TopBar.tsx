import { ReactNode } from 'react'
import { Burger, clsx, createStyles, Header, MediaQuery } from '@mantine/core'
import { UserDesktopNavigation } from '@user'

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: '#100011',
    height: 70,
    [`@media screen and (min-width: ${theme.breakpoints.md}px)`]: {
      height: 90,
    },
    [`@media screen and (min-width: ${theme.breakpoints.lg}px)`]: {
      height: 110,
    },
  },
  headerWrapper: {
    height: 'inherit',
  },
  burger: {
    opacity: 0.7,
    '&:hover, &:focus': {
      outline: 'none',
      border: 'none',
      opacity: 1,
    },
  },
}))

interface IProps {
  logo: ReactNode
  setIsOpen: (value: boolean) => void
  isOpen: boolean
}

function TopBar({ logo, setIsOpen, isOpen }: IProps) {
  const { classes } = useStyles()

  return (
    <Header height={{ base: 'initial' }} className={classes.header}>
      <div className={clsx('flex items-center justify-between min-w-full', 'px-4', classes.headerWrapper)}>
        {logo}
        <UserDesktopNavigation />
        <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
          <Burger
            opened={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            size={'sm'}
            color={'white'}
            className={clsx('ease-linear duration-100', classes.burger)}
          />
        </MediaQuery>
      </div>
    </Header>
  )
}

export default TopBar
