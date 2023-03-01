import { Fragment, useMemo, useState } from 'react'
import { USER_NAVIGATION } from '@common'
import { Avatar, Box, createStyles, Group, Menu, Modal, Text, UnstyledButton } from '@mantine/core'
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

function UserMobileNavigation() {
  const { classes } = useStyles()
  const [isOpen, setIsOpen] = useState(false)

  const userMenu = useMemo(() => {
    return USER_NAVIGATION.concat([
      { isTitle: true, label: 'Inne' },
      { isTitle: false, label: 'Wyloguj się', href: '/', icon: <DoorExit size={14} /> },
    ])
  }, [])

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
      <UnstyledButton className={clsx('my-4 mx-4', classes.button)} onClick={() => setIsOpen(true)}>
        <Group className={'justify-between'}>
          <Box className={'flex items-center'}>
            <Avatar radius={'xl'} size={40} />
            <Box className={'ml-4'}>
              <Text className={classes.name}>{'Ryu'}</Text>
              <Text className={classes.title}>{'Administrator'}</Text>
            </Box>
          </Box>
          <ChevronRight size={18} />
        </Group>
      </UnstyledButton>
    </Fragment>
  )
}

export default UserMobileNavigation
