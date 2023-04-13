import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateOrLoginDialog } from '@auth'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogin } from '@tabler/icons-react'
import { clsx } from 'clsx'

function CreateOrLoginAccountMenuButton() {
  const { t } = useTranslation()
  const [opened, { close, open }] = useDisclosure(false)

  return (
    <Fragment>
      <Button onClick={open} className={clsx('duration-100 px-6 py-2 h-auto')} leftIcon={<IconLogin size={'1.25rem'} />} radius={'xs'}>
        {t('auth:action.goIntoSystem')}
      </Button>
      {opened && <CreateOrLoginDialog isOpen={opened} handleClose={close} />}
    </Fragment>
  )
}

export default CreateOrLoginAccountMenuButton
