import { Link } from 'react-router-dom'
import { Group, Tooltip } from '@mantine/core'
import { IconUserPlus } from '@tabler/icons-react'

import { UserLoginModal } from '../modal/UserLoginModal.tsx'

import classes from './Menu.module.css'

export function GuestMenu() {
  return (
    <Group gap={'sm'}>
      <Tooltip color={'gray'} label={'Utwórz nowe konto'}>
        <Link className={classes.link} to={'/create-account'}>
          <IconUserPlus stroke={1.5} style={{ height: '24px', width: '24px' }} />
        </Link>
      </Tooltip>
      <UserLoginModal />
    </Group>
  )
}
