import { Anchor, Tooltip } from '@mantine/core'
import { navbarStyles } from '@modules/common'
import { IconBrandDiscordFilled } from '@tabler/icons-react'
import { clsx } from 'clsx'

const DiscordButton = () => {
  return (
    <Tooltip position={'bottom'} label={'Wejdź na serwer Discord'}>
      <Anchor
        href={'https://discord.gg/NJQhwKq'}
        className={clsx(
          'min-w-[100px] flex items-center py-1 px-2 rounded',
          navbarStyles.mainNavbarItemDiscord,
        )}
      >
        <IconBrandDiscordFilled width={20} stroke={1.5} />
        <span className={clsx('pl-2', navbarStyles.mainNavbarItemDiscordText)}>
          {'Discord'}
        </span>
      </Anchor>
    </Tooltip>
  )
}

export default DiscordButton
