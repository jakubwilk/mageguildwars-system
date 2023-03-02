import { Fragment, useMemo, useState } from 'react'
import { IUser, USER_NAVIGATION } from '@common'
import { Avatar, Box, createStyles, Group, Menu, Modal, Skeleton, Text, UnstyledButton } from '@mantine/core'
import clsx from 'clsx'
import { ChevronRight, DoorExit } from 'tabler-icons-react'

const useStyles = createStyles((theme) => ({
  button: {
    width: 'calc(100% - 2rem)',
  },
  name: {
    textTransform: 'uppercase',
    fontWeight: 700,
  },
  title: {
    color: theme.colors.dark[2],
    fontWeight: 400,
    fontFamily: theme.headings.fontFamily,
    textTransform: 'uppercase',
    fontSize: '0.75rem',
  },
}))

interface IProps {
  userDetails: IUser | null
  isLoading: boolean
}

function UserMobileNavigation({ userDetails, isLoading }: IProps) {
  const { classes } = useStyles()
  const [isOpen, setIsOpen] = useState(false)

  const userMenu = useMemo(() => {
    return USER_NAVIGATION.concat([
      { isTitle: true, label: 'Inne' },
      { isTitle: false, label: 'Wyloguj się', href: '/', icon: <DoorExit size={14} /> },
    ])
  }, [])

  const isDataNotReady = useMemo(() => !Boolean(userDetails) && isLoading, [userDetails, isLoading])

  return (
    <Fragment>
      <Modal opened={isOpen} onClose={() => setIsOpen(false)} title={'Nawigacja użytkownika'}>
        <Menu>
          {userMenu.map(({ isTitle, label, href, icon }) => (
            <Fragment key={label}>
              {isTitle ? (
                <Menu.Label>{label}</Menu.Label>
              ) : (
                <Menu.Item component={'a'} href={href} icon={icon}>
                  {label}
                </Menu.Item>
              )}
            </Fragment>
          ))}
        </Menu>
      </Modal>
      <UnstyledButton
        className={clsx('my-4 mx-4', classes.button)}
        onClick={() => setIsOpen(true)}
        disabled={isDataNotReady}
      >
        <Group className={'justify-between'}>
          <Box className={'flex items-center'}>
            {isDataNotReady ? <Skeleton height={40} circle /> : <Avatar radius={'xl'} size={40} />}
            <Box className={'ml-4'}>
              {isDataNotReady ? (
                <Fragment>
                  <Skeleton height={8} radius={'xl'} />
                  <Skeleton height={8} radius={'xl'} />
                </Fragment>
              ) : (
                <Fragment>
                  <Text className={classes.name}>{userDetails?.username}</Text>
                  <Text className={classes.title}>{userDetails?.title}</Text>
                </Fragment>
              )}
            </Box>
          </Box>
          <ChevronRight size={18} />
        </Group>
      </UnstyledButton>
    </Fragment>
  )
}

export default UserMobileNavigation
