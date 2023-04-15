import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { CreateOrLoginDialog } from '@auth'
import { Button, createStyles, Divider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconSquareArrowRight } from '@tabler/icons-react'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  line: {
    borderColor: theme.colors.night[2],
  },
  button: {
    backgroundColor: 'transparent',
    padding: '0.5rem',
    color: theme.colors.gray[5],
    fontWeight: 400,
    '&:hover, &:focus': {
      backgroundColor: theme.colors.night[3],
    },
    '& .icon': {
      color: theme.colors.gray[8],
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
        className={clsx('w-full duration-150 uppercase', classes.button)}
        leftIcon={<IconSquareArrowRight size={18} />}
      >
        {t('auth:action.goIntoSystem')}
      </Button>
      {opened && <CreateOrLoginDialog isOpen={opened} handleClose={close} />}
    </Fragment>
  )
}

export default GuestUserNavigation
