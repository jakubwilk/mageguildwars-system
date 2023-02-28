import { MediaQuery, Navbar, Text } from '@mantine/core'
import { UserMobileNavigation } from '@user'

interface IProps {
  isHidden: boolean
}

function Navigation({ isHidden }: IProps) {
  return (
    <Navbar hiddenBreakpoint={'md'} hidden={isHidden} width={{ md: 300 }}>
      <Navbar.Section grow>
        <Text>{'Menu'}</Text>
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
