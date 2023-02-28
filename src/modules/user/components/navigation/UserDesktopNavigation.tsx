import { Poppins } from 'next/font/google'
import {
  ActionIcon,
  Avatar,
  clsx,
  createStyles,
  CSSObject,
  Group,
  Indicator,
  MediaQuery,
  Text,
  Tooltip,
} from '@mantine/core'
import { Bell, Message } from 'tabler-icons-react'

const poppins = Poppins({ weight: '400', subsets: ['latin-ext'] })

const useStyles = createStyles(() => ({
  navigationWrapper: {
    height: 'inherit',
  },
}))

const mediaStyles: CSSObject = {
  display: 'none !important',
}

function UserDesktopNavigation() {
  const { classes } = useStyles()

  return (
    <MediaQuery smallerThan={'sm'} styles={mediaStyles}>
      <div className={clsx('flex items-center', classes.navigationWrapper)}>
        <Group spacing={'lg'}>
          <Tooltip label={'Prywatne wiadomości'} position={'left'} withArrow>
            <Indicator label={5} color={'blue'} size={18} offset={5} inline>
              <ActionIcon radius={'xl'}>
                <Message size={24} strokeWidth={1.5} />
              </ActionIcon>
            </Indicator>
          </Tooltip>
          <Tooltip label={'Powiadomienia'} position={'bottom'} withArrow>
            <Indicator color={'red'} size={10} offset={5} dot inline>
              <ActionIcon radius={'xl'}>
                <Bell size={24} strokeWidth={1.5} />
              </ActionIcon>
            </Indicator>
          </Tooltip>
          <button className={'flex items-center'}>
            <Avatar radius={'xl'} size={'md'} />
            <Text color={'white'} className={clsx('ml-2', poppins.className)}>
              {'Ryu'}
            </Text>
          </button>
        </Group>
      </div>
    </MediaQuery>
  )
}

export default UserDesktopNavigation
