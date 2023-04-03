import { ReactNode } from 'react'
import { useDialog } from '@common'
import { Modal } from '@mantine/core'

interface IProps {
  children: ReactNode
  title: string
  isCloseButton?: boolean
}

function Dialog({ children, title, isCloseButton = true }: IProps) {
  const { isOpen, handleCloseDialog } = useDialog()

  return (
    <Modal title={title} opened={isOpen} onClose={handleCloseDialog} withCloseButton={isCloseButton}>
      {children}
    </Modal>
  )
}

export default Dialog
