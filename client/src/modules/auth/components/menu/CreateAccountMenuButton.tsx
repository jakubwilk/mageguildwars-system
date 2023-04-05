import { Fragment } from 'react'
import { CreateAccountDialog } from '@auth'
import { useDialog } from '@common'
import { Button } from '@mantine/core'

function CreateAccountMenuButton() {
  const { isOpen, handleOpenDialog } = useDialog()

  return (
    <Fragment>
      <Button onClick={handleOpenDialog}>{'Zarejestruj się'}</Button>
      {isOpen && <CreateAccountDialog />}
    </Fragment>
  )
}

export default CreateAccountMenuButton
