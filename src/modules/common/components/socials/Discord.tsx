import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Button, Tooltip } from '@mantine/core'
import { IconBrandDiscordFilled } from '@tabler/icons-react'

import classes from './Socials.module.css'

interface IProps {
  isOnlyIcon?: boolean
}

export function Discord({ isOnlyIcon = false }: IProps) {
  const componentClassName = useMemo(
    () => `${classes.discord} ${isOnlyIcon ? classes.discordButton : ''}`,
    [isOnlyIcon],
  )
  const DiscordComponent = useMemo(
    () => (
      <Button
        className={componentClassName}
        component={Link}
        to={'https://discord.gg/NJQhwKq'}
      >
        {isOnlyIcon ? <IconBrandDiscordFilled /> : 'Discord'}
      </Button>
    ),
    [isOnlyIcon, componentClassName],
  )

  return (
    <Tooltip color={'gray'} label={'Przejdź na serwer Discord'}>
      {DiscordComponent}
    </Tooltip>
  )
}
