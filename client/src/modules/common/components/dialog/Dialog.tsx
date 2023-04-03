import { ReactNode } from 'react'
import { Modal } from '@mantine/core'

import { useDialog } from '../../hooks'

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
