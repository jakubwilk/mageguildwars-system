import { Fragment } from 'react'
import { Button, createStyles, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { ChangePasswordForm } from '@user'

const useStyles = createStyles((theme) => ({
  modal: {
    '& .mantine-Modal-content': {
      backgroundColor: theme.colors.dark[5],
    },
    '& .mantine-Modal-header': {
      backgroundColor: theme.colors.dark[5],
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
      <Modal opened={opened} onClose={close} title={title} className={classes.modal}>
        <ChangePasswordForm handleClose={close} />
      </Modal>
      <Button variant={'light'} onClick={open}>
        {actionName}
      </Button>
    </Fragment>
  )
}

export default ChangePasswordDialog
