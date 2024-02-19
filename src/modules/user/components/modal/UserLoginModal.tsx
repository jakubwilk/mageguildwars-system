import { Button, Modal, Tooltip } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogin2 } from '@tabler/icons-react'
import clsx from 'clsx'

import { LoginForm } from '../../../auth/components'

import classes from '../menu/Menu.module.css'

export function UserLoginModal() {
  const [opened, { open: handleOpen, close: handleClose }] = useDisclosure(false)

  return (
    <>
      <Tooltip color={'gray'} label={'Zaloguj się na konto'}>
        <Button
          className={clsx('px-0', classes.button)}
          onClick={handleOpen}
          variant={'transparent'}
        >
          <IconLogin2 stroke={1.5} style={{ height: '24px', width: '24px' }} />
        </Button>
      </Tooltip>
      <Modal onClose={handleClose} opened={opened} title={'Logowanie na konto'}>
        <LoginForm />
      </Modal>
    </>
  )
}
