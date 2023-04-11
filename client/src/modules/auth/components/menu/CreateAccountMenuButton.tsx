import { Fragment } from 'react'
// import { CreateAccountDialog } from '@auth'
// import { useDialog } from '@common'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import CreateOrLoginDialog from '../dialog/CreateOrLoginDialog'

function CreateAccountMenuButton() {
  const [opened, { close, open }] = useDisclosure(false)
  // const { isOpen, handleOpenDialog, handleCloseDialog } = useDialog()

  console.log('opened', opened)

  return (
    <Fragment>
      <Button onClick={open}>{'Zarejestruj się'}</Button>
      {opened && <CreateOrLoginDialog isOpen={opened} handleClose={close} />}
      {/*{isOpen && <CreateAccountDialog handleCloseDialog={handleCloseDialog} />}*/}
    </Fragment>
  )
}

export default CreateAccountMenuButton
