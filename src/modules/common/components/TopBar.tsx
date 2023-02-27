import { ReactNode } from 'react'
import { Burger, Header, MediaQuery } from '@mantine/core'

interface IProps {
  logo: ReactNode
  setIsOpen: (value: boolean) => void
  isOpen: boolean
}

function TopBar({ logo, setIsOpen, isOpen }: IProps) {
  return (
    <Header height={{ base: 50 }}>
      <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
        <Burger opened={isOpen} onClick={() => setIsOpen(!isOpen)} size={'sm'} />
      </MediaQuery>
      {logo}
    </Header>
  )
}

export default TopBar
