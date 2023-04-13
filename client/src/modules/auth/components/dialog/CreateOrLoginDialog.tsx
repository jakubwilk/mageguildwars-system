import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AUTH_METHOD_ENUM, CreateAccountDialog, LoginAccountDialog } from '@auth'
import { Button, createStyles, Modal, Tabs, Title } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles(() => ({
  modal: {
    '& .mantine-Modal-content': {
      padding: '1rem',
    },
  },
  tabs: {
    '& .mantine-Tabs-tab': {
      borderRadius: '0.125rem',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  cancelButton: {
    '&.mantine-Button-root': {
      borderRadius: '0.125rem',
    },
  },
}))

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

function CreateOrLoginDialog({ isOpen, handleClose }: IProps) {
  const { t } = useTranslation()
  const { classes } = useStyles()
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
      <Button onClick={handleClose} className={clsx('duration-100', classes.cancelButton)}>
        {t('common:action.cancel')}
      </Button>
    ),
    [t, classes.cancelButton, handleClose]
  )

  return (
    <Modal opened={isOpen} onClose={handleClose} className={classes.modal} size={'lg'} radius={'xs'} withCloseButton={false}>
      <Tabs variant={'pills'} defaultValue={AUTH_METHOD_ENUM.LOGIN} onTabChange={handleSetDialogTitle}>
        <Tabs.List className={clsx('flex items-center justify-between', classes.tabs)}>
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
        <Tabs.Panel value={AUTH_METHOD_ENUM.LOGIN} pt={'md'}>
          <LoginAccountDialog closeButton={closeButton} handleCloseDialog={handleClose} />
        </Tabs.Panel>
        <Tabs.Panel value={AUTH_METHOD_ENUM.REGISTER} pt={'md'}>
          <CreateAccountDialog closeButton={closeButton} handleCloseDialog={handleClose} />
        </Tabs.Panel>
      </Tabs>
    </Modal>
  )
}

export default CreateOrLoginDialog
