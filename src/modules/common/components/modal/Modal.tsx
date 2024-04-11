import { Modal as MantineModal, ModalProps } from '@mantine/core'

type TModalProps = Omit<ModalProps, 'onClose' | 'opened'>

interface IProps extends TModalProps {
  title: string
  isOpen: boolean
  handleClose: () => void
}

export function Modal({ isOpen, handleClose, title, children, ...rest }: IProps) {
  return (
    <MantineModal {...rest} onClose={handleClose} opened={isOpen} title={title}>
      {children}
    </MantineModal>
  )
}
