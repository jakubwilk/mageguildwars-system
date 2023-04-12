import { useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AUTH_METHOD_ENUM } from '@auth'
import { COLOR_PALETTE } from '@common'
import { Button, createStyles, MantineTheme, Modal, Tabs, Title } from '@mantine/core'
import { clsx } from 'clsx'

import CreateAccountDialog from './CreateAccountDialog'

const useStyles = createStyles((theme: MantineTheme) => ({
  modal: {
    '& .mantine-Modal-content': {
      padding: '1rem',
      backgroundColor: theme.colors[COLOR_PALETTE.NIGHT][9],
    },
  },
  tabs: {
    '& .mantine-Tabs-tab': {
      borderRadius: '0.125rem',
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&[aria-selected=true]': {
        backgroundColor: theme.colors[COLOR_PALETTE.JONQUIL][1],
        color: theme.colors[COLOR_PALETTE.NIGHT][9],
        '&:hover, &:focus': {
          backgroundColor: theme.colors[COLOR_PALETTE.JONQUIL][1],
        },
      },
      '&[aria-selected=false]': {
        color: theme.colors[COLOR_PALETTE.SNOW_WHITE][7],
        '&:hover, &:focus': {
          color: theme.colors[COLOR_PALETTE.SNOW_WHITE][3],
        },
      },
    },
  },
  cancelButton: {
    '&.mantine-Button-root': {
      borderRadius: '0.125rem',
      backgroundColor: theme.colors[COLOR_PALETTE.SNOW_WHITE][9],
      '&:hover, &:focus': {
        backgroundColor: theme.colors[COLOR_PALETTE.SNOW_WHITE][4],
        color: theme.colors[COLOR_PALETTE.NIGHT][9],
      },
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
        {'Anuluj'}
      </Button>
    ),
    [classes.cancelButton, handleClose]
  )

  return (
    <Modal opened={isOpen} onClose={handleClose} className={classes.modal} size={'lg'} radius={'xs'} withCloseButton={false}>
      <Tabs variant={'pills'} defaultValue={AUTH_METHOD_ENUM.LOGIN} onTabChange={handleSetDialogTitle}>
        <Tabs.List className={clsx('flex items-center justify-between', classes.tabs)}>
          <Title size={'h4'} color={'white'}>
            {dialogTitle}
          </Title>
          <div className={'flex items-center'}>
            <Tabs.Tab value={AUTH_METHOD_ENUM.LOGIN} className={'duration-50'}>
              {'Logowanie'}
            </Tabs.Tab>
            <Tabs.Tab value={AUTH_METHOD_ENUM.REGISTER} className={'duration-50'}>
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
