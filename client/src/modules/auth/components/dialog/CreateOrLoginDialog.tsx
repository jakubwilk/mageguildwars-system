import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AUTH_METHOD_ENUM, CreateAccountDialog, LoginAccountDialog } from '@auth'
import { Button, Modal, Tabs, Title } from '@mantine/core'
import { clsx } from 'clsx'

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
      <Button onClick={handleClose} className={clsx('duration-100')}>
        {t('common:action.cancel')}
      </Button>
    ),
    [t, handleClose]
  )

  return (
    <Modal opened={isOpen} onClose={handleClose} size={'lg'} radius={'xs'} withCloseButton={false}>
      <Tabs variant={'pills'} defaultValue={AUTH_METHOD_ENUM.LOGIN} onTabChange={handleSetDialogTitle} className={'p-4'}>
        <Tabs.List className={clsx('flex items-center justify-between')}>
          <Title size={'h4'}>{dialogTitle}</Title>
          <div className={'flex items-center'}>
            <Tabs.Tab value={AUTH_METHOD_ENUM.LOGIN} className={'duration-50'}>
              {t('auth:tab.loginTab')}
            </Tabs.Tab>
            <Tabs.Tab value={AUTH_METHOD_ENUM.REGISTER} className={'duration-50'}>
              {t('auth:tab.registerTab')}
            </Tabs.Tab>
          </div>
        </Tabs.List>
        <Tabs.Panel value={AUTH_METHOD_ENUM.LOGIN}>
          <LoginAccountDialog closeButton={closeButton} handleCloseDialog={handleClose} />
        </Tabs.Panel>
        <Tabs.Panel value={AUTH_METHOD_ENUM.REGISTER}>
          <CreateAccountDialog closeButton={closeButton} handleCloseDialog={handleClose} />
        </Tabs.Panel>
      </Tabs>
    </Modal>
  )
}

export default CreateOrLoginDialog
