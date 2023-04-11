import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import CreateOrLoginDialog from '../dialog/CreateOrLoginDialog'

function CreateAccountMenuButton() {
  const { t } = useTranslation()
  const [opened, { close, open }] = useDisclosure(false)

  return (
    <Fragment>
      <Button onClick={open}>{t('auth:action.goIntoSystem')}</Button>
      {opened && <CreateOrLoginDialog isOpen={opened} handleClose={close} />}
    </Fragment>
  )
}

export default CreateAccountMenuButton
