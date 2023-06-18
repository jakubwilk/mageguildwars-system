import { Fragment } from 'react'
import { Button, createStyles, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ChangePasswordForm } from '@user'
import { clsx } from 'clsx'

const useStyles = createStyles((theme) => ({
  modal: {
    '& .mantine-Modal-title': {
      color: theme.colors.gray[2],
      textTransform: 'uppercase',
    },
    '& .mantine-Modal-content': {
      backgroundColor: theme.colors.dark[5],
    },
    '& .mantine-Modal-header': {
      backgroundColor: theme.colors.dark[5],
    },
    '& .mantine-Modal-close': {
      '&:hover, &:focus': {
        backgroundColor: theme.colors.dark[4],
      },
    },
  },
  button: {
    backgroundColor: 'transparent',
    fontWeight: 400,
    color: theme.colors.gray[7],
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
      color: theme.colors.gray[2],
    },
  },
}))

interface IProps {
  actionName: string
  title: string
}

function ChangePasswordDialog({ actionName, title }: IProps) {
  const { classes } = useStyles()
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <Fragment>
      <Modal opened={opened} onClose={close} title={title} className={clsx('duration-100', classes.modal)}>
        <ChangePasswordForm handleClose={close} />
      </Modal>
      <Button variant={'light'} onClick={open} size={'md'} className={clsx('duration-100 p-0 h-auto w-auto mb-1', classes.button)}>
        {actionName}
      </Button>
    </Fragment>
  )
}

export default ChangePasswordDialog
