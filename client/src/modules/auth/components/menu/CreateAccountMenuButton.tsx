import { Fragment } from 'react'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import CreateOrLoginDialog from '../dialog/CreateOrLoginDialog'

function CreateAccountMenuButton() {
  const [opened, { close, open }] = useDisclosure(false)

  return (
    <Fragment>
      <Button onClick={open}>{'Zarejestruj się'}</Button>
      {opened && <CreateOrLoginDialog isOpen={opened} handleClose={close} />}
    </Fragment>
  )
}

export default CreateAccountMenuButton
