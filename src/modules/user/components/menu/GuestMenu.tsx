import { Link } from 'react-router-dom'
import { Button, Group, Tooltip } from '@mantine/core'
import { IconLogin2, IconUserPlus } from '@tabler/icons-react'

import classes from './Menu.module.css'

export function GuestMenu() {
  return (
    <Group gap={'sm'}>
      <Tooltip color={'gray'} label={'Utwórz nowe konto'}>
        <Link className={classes.link} to={'/create-account'}>
          <IconUserPlus stroke={1.5} style={{ height: '24px', width: '24px' }} />
        </Link>
      </Tooltip>
      <Tooltip color={'gray'} label={'Zaloguj się na konto'}>
        <Button className={classes.button} variant={'transparent'}>
          <IconLogin2 stroke={1.5} style={{ height: '24px', width: '24px' }} />
        </Button>
      </Tooltip>
    </Group>
  )
}
