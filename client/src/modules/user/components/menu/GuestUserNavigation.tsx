import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateOrLoginDialog } from '@auth'
import { Button, createStyles, Divider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconSquareArrowRight } from '@tabler/icons-react'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  line: {
    borderColor: theme.colors.gray[9],
  },
  button: {
    color: theme.colors.gray[5],
    fontWeight: 600,
    fontSize: '0.85rem',
    '&:hover, &:focus': {
      backgroundColor: theme.colors['dark-purple'][9],
      color: theme.white,
    },
    '& .mantine-Button-inner': {
      justifyContent: 'flex-start',
    },
  },
}))

function GuestUserNavigation() {
  const { t } = useTranslation()
  const { classes } = useStyles()
  const [opened, { close, open }] = useDisclosure(false)

  return (
    <Fragment>
      <Divider className={clsx('my-4', classes.line)} />
      <Button
        onClick={open}
        className={clsx('w-full duration-150', classes.button)}
        radius={'sm'}
        size={'md'}
        variant={'subtle'}
        leftIcon={<IconSquareArrowRight size={18} />}
      >
        {t('auth:action.goIntoSystem')}
      </Button>
      {opened && <CreateOrLoginDialog isOpen={opened} handleClose={close} />}
    </Fragment>
  )
}

export default GuestUserNavigation
