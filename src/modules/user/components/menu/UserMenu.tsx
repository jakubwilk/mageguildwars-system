import { Avatar, Button, Group, Menu, Tooltip } from '@mantine/core'
import { IconDoorExit } from '@tabler/icons-react'

import classes from './Menu.module.css'

export function UserMenu() {
  return (
    <Group gap={'sm'}>
      <Tooltip color={'gray'} label={'Otwórz menu użytkownika'}>
        <Menu width={250}>
          <Menu.Target>
            <Button className={'p-0 m-0 h-[38px] w-[38px]'} variant={'transparent'}>
              <Avatar radius={'xl'} />
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label className={'uppercase'}>{'Konto'}</Menu.Label>
            <Menu.Label className={'uppercase'}>{'Mage Guild Wars'}</Menu.Label>
          </Menu.Dropdown>
        </Menu>
      </Tooltip>
      <Tooltip color={'gray'} label={'Wyloguj się z aplikacji'}>
        <Button className={classes.logout} variant={'transparent'}>
          <IconDoorExit stroke={1.5} style={{ height: '24px', width: '24px' }} />
        </Button>
      </Tooltip>
    </Group>
  )
}
