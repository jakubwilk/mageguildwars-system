import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AUTH_METHOD_ENUM } from '@auth'
import { Button, Modal, Tabs, Title } from '@mantine/core'

import CreateAccountDialog from './CreateAccountDialog'

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

function CreateOrLoginDialog({ isOpen, handleClose }: IProps) {
  const { t } = useTranslation()
  const [dialogTitle, setDialogTitle] = useState(t('auth:tab.loginTitle'))

  const handleSetDialogTitle = useCallback(
    (value: string) => {
      if (value === AUTH_METHOD_ENUM.LOGIN) {
        setDialogTitle(t('auth:tab.loginTitle'))
      } else {
        setDialogTitle(t('auth:tab.registerTitle'))
      }
    },
    [setDialogTitle, t]
  )

  const closeButton = useMemo(
    () => (
      <Button color={'gray'} onClick={handleClose}>
        {'Anuluj'}
      </Button>
    ),
    [handleClose]
  )

  return (
    <Modal opened={isOpen} onClose={handleClose} withCloseButton={false} size={'lg'}>
      <Tabs variant={'pills'} defaultValue={AUTH_METHOD_ENUM.LOGIN} onTabChange={handleSetDialogTitle}>
        <Tabs.List className={'flex items-center justify-between'}>
          <Title size={'h4'}>{dialogTitle}</Title>
          <div className={'flex items-center'}>
            <Tabs.Tab value={AUTH_METHOD_ENUM.LOGIN}>{'Logowanie'}</Tabs.Tab>
            <Tabs.Tab value={AUTH_METHOD_ENUM.REGISTER} className={'ml-4'}>
              {'Rejestracja'}
            </Tabs.Tab>
          </div>
        </Tabs.List>
        <Tabs.Panel value={AUTH_METHOD_ENUM.LOGIN} pt={'md'}>
          {'Gallery tab content\r'}
        </Tabs.Panel>
        <Tabs.Panel value={AUTH_METHOD_ENUM.REGISTER} pt={'md'}>
          <CreateAccountDialog closeButton={closeButton} handleCloseDialog={handleClose} />
        </Tabs.Panel>
      </Tabs>
    </Modal>
  )
}

export default CreateOrLoginDialog
