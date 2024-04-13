import { Modal as MantineModal, ModalProps } from '@mantine/core'

type TModalProps = Omit<ModalProps, 'onClose' | 'opened'>

interface IProps extends TModalProps {
  title: string
  isOpen: boolean
  handleClose: () => void
}

export function Modal({ isOpen, handleClose, title, children, ...rest }: IProps) {
  return (
    <MantineModal
      {...rest}
      classNames={{ content: 'p-2' }}
      onClose={handleClose}
      opened={isOpen}
      radius={'md'}
      title={title}
    >
      {children}
    </MantineModal>
  )
}
