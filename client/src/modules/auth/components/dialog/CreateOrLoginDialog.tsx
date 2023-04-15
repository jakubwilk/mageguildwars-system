import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AUTH_METHOD_ENUM, CreateAccountDialog, LoginAccountDialog } from '@auth'
import { Button, createStyles, Modal, Tabs, Title } from '@mantine/core'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  dialog: {
    '& .mantine-Modal-content': {
      backgroundColor: theme.colors.brand[9],
    },
  },
  tab: {
    color: theme.colors.gray[5],
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
      color: theme.white,
    },
    '&[aria-selected="true"]': {
      backgroundColor: theme.colors.brand[6],
    },
  },
  button: {
    backgroundColor: theme.colors.night[3],
    '&:hover, &:focus': {
      backgroundColor: theme.colors.night[1],
    },
  },
}))

interface IProps {
  isOpen: boolean
  handleClose: () => void
}

function CreateOrLoginDialog({ isOpen, handleClose }: IProps) {
  const { classes } = useStyles()
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
      <Button onClick={handleClose} className={clsx('duration-100', classes.button)}>
        {t('common:action.cancel')}
      </Button>
    ),
    [handleClose, classes.button, t]
  )

  return (
    <Modal opened={isOpen} onClose={handleClose} size={'lg'} radius={'md'} withCloseButton={false} className={classes.dialog}>
      <Tabs variant={'pills'} defaultValue={AUTH_METHOD_ENUM.LOGIN} onTabChange={handleSetDialogTitle} className={'p-4'}>
        <Tabs.List className={clsx('flex items-center justify-between')}>
          <Title size={'h4'}>{dialogTitle}</Title>
          <div className={'flex items-center'}>
            <Tabs.Tab value={AUTH_METHOD_ENUM.LOGIN} className={clsx('duration-50', classes.tab)}>
              {t('auth:tab.loginTab')}
            </Tabs.Tab>
            <Tabs.Tab value={AUTH_METHOD_ENUM.REGISTER} className={clsx('duration-50', classes.tab)}>
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
