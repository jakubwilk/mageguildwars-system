'use client'

import { Modal } from '@mantine/core'

interface IProps {
  isOpen: boolean
  handleCloseModal: () => void
}

const ChangeEmailModal = ({ isOpen, handleCloseModal }: IProps) => {
  return (
    <Modal opened={isOpen} onClose={handleCloseModal} title={'Zmiana adresu email'}>
      <p>{'Modal body'}</p>
    </Modal>
  )
}

export default ChangeEmailModal
