import { Link } from 'react-router-dom'
import { ActionIcon, Tooltip } from '@mantine/core'
import { IconLayoutSidebarRightExpand } from '@tabler/icons-react'

import classes from './Header.module.css'

export function Header() {
  return (
    <header className={'py-8 flex items-center justify-between w-full'}>
      <div className={'mr-4'}>
        <Link className={'block'} to={'/'}>
          <img
            alt={'Mage Guild Wars'}
            src={'https://mageguildwars.pl/images/mgw_modern/logo.png'}
          />
        </Link>
      </div>
      <Tooltip color={'dark'} label={'Otwórz panel boczny'} position={'bottom'}>
        <ActionIcon
          aria-label={'Otwórz panel boczny'}
          className={classes.icon}
          radius={'xs'}
          size={'xl'}
          variant={'transparent'}
        >
          <IconLayoutSidebarRightExpand
            stroke={1.5}
            style={{ width: '70%', height: '70%' }}
          />
        </ActionIcon>
      </Tooltip>
    </header>
  )
}
