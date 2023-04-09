import { Fragment } from 'react'
import { CreateAccountDialog } from '@auth'
import { useDialog } from '@common'
import { Button } from '@mantine/core'

function CreateAccountMenuButton() {
  const { isOpen, handleOpenDialog, handleCloseDialog } = useDialog()

  return (
    <Fragment>
      <Button onClick={handleOpenDialog}>{'Zarejestruj się'}</Button>
      {isOpen && <CreateAccountDialog handleCloseDialog={handleCloseDialog} />}
    </Fragment>
  )
}

export default CreateAccountMenuButton
