import { ReactNode } from 'react'
import { Burger, clsx, createStyles, Header, MediaQuery } from '@mantine/core'
import { UserDesktopNavigation } from '@user'

import { IUser } from '../../models'

const useStyles = createStyles(() => ({
  header: {
    backgroundColor: '#100011',
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
  isLoading: boolean
}

function TopBar({ logo, setIsOpen, isOpen, isLoading }: IProps) {
  const { classes } = useStyles()

  return (
    <Header height={{ base: 70, md: 90, lg: 110 }} className={classes.header}>
      <div className={clsx('flex items-center justify-between min-w-full', 'px-4', classes.headerWrapper)}>
        {logo}
        <UserDesktopNavigation isLoading={isLoading} />
        <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
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
