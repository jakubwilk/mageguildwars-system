import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateOrLoginDialog } from '@auth'
import { COLOR_PALETTE } from '@common'
import { Button, createStyles, MantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconLogin } from '@tabler/icons-react'
import { clsx } from 'clsx'

const useStyles = createStyles((theme: MantineTheme) => ({
  primaryButton: {
    '&.mantine-Button-root': {
      backgroundColor: theme.colors[COLOR_PALETTE.JONQUIL][9],
      color: theme.black,
      '&:hover, &:focus': {
        backgroundColor: theme.colors[COLOR_PALETTE.JONQUIL][5],
      },
    },
  },
}))

function CreateOrLoginAccountMenuButton() {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [opened, { close, open }] = useDisclosure(false)

  return (
    <Fragment>
      <Button
        onClick={open}
        className={clsx('duration-100 px-6 py-2 h-auto', classes.primaryButton)}
        leftIcon={<IconLogin size={'1.25rem'} />}
        radius={'xs'}
      >
        {t('auth:action.goIntoSystem')}
      </Button>
      {opened && <CreateOrLoginDialog isOpen={opened} handleClose={close} />}
    </Fragment>
  )
}

export default CreateOrLoginAccountMenuButton
